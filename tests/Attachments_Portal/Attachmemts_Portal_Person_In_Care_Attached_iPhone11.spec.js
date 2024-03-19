import { test, expect, devices } from '@playwright/test';
import exp from 'constants';
import { json } from 'stream/consumers';

test.use({
  ...devices['iPhone 11'],
});

const baseURL ='https://healthbc--hlthbcqax.sandbox.my.salesforce.com';
const authServiceEndPoint = 'https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/oauth2/token';
const getSQLPersonContactId =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+PersonContactId+FROM+Account+WHERE+FirstName='Kenton'+AND+LastName='Troup'";
const getSQLPatientId =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+Id+FROM+Account+WHERE+FirstName='Kenton'+AND+LastName='Troup'";

const username = 'igor.emelyanov@phsa.ca.hlthbcqax';
const password = 'Technology1990!!!!!!'; 
const grant_type = 'password';
const client_id = '3MVG9gtjsZa8aaSUbjszB7_VsL_2u.UZJ4tEpAWLYoFtXEaHXhmhR0XEj21cuU53DRql2prIcFbAc4dm29Co0';
const client_secret = '5C598651FEE76A184BCAD8F6BD7B26B304AD18D8FF622802DEA793600D21C918';


test('API_Preconditionong_Removing_Dups_Kenton Troup', async ({request, baseURL}) => {
  /////Pre Conditioning API Remove dups Kenton Trup
  console.log("/*0.---Pre-Condition API Remove 'Kenton Trup' with the Case from SF --*/");
  //0.1. Just check that we can Establish connection and get token
  console.log("0.1 Just check that we can Establish connection and get token");
  const acc_token = await request.post(authServiceEndPoint, {
    form:{
      username : username,
      password : password,
      grant_type : grant_type,
      client_id : client_id,
      client_secret : client_secret
    }
  });
  
  expect (acc_token.status()).toBe(200)
  console.log(await acc_token.statusText());
  //const text = await acc_token.text();
  //console.log("acc_token is: " +text);
  //console.log(await acc_token.json());
  const content = await acc_token.json();
  //expect(text).toContain('Bearer')
  console.log(content);
  const {access_token} = content;
  console.log(access_token);
  //const bearer = "Bearer " + access_token;
  //console.log(bearer);
  

  //0.2 .find personContactID.select 
  console.log("\n0.2. Select PersonContactID 'Kenton Trup' from Account.");
  const personContactID = await request.get(getSQLPersonContactId, {
    form:{
      //grant_type : "bearer",
      //q : "query?q=SELECT+Id,MOHBC_PRV_Clinic_Business_Name__c+FROM+Account+Limit+3"
      //FirstName : "Kenton",
      //LastName : "Troup"
    },
    //params:{
      //FirstName : "Kenton",
      //LastName : "Troup"
    //},
    headers:{
      //'content-type' : "application/json;charset=UTF-8",
      Authorization : "Bearer " + access_token,
    },
    
  });

  expect (personContactID.status()).toBe(200);
  expect (personContactID.ok()).toBeTruthy();
  await expect(personContactID).toBeOK();
  
  console.log('\n//////text/////-------------------------');
  const personid_text = await personContactID.text();
  console.log(personid_text);
  //expect(personid_text).toContain("attributes");
  //expect(personid_text).toContain("003Aq00000OufCVIAZ");

  console.log('\n/////Json//////-------------------------');
  const personid_json = await personContactID.json();
  console.log(personid_json);
  expect(personid_json.done).toBe(true);
  //expect(personid_json.totalSize).toBe(1);
  if (personid_json.totalSize != 0){
    console.log('\n/////see all Records in there//////-------------------------');
    console.log('personid_json.records = \n ', personid_json.records);
    //expect(await personid_records).toContainEqual(expect.objectContaining({PersonContactId: "003Aq00000P8QDTIA3"}))
    //console.log('\n personid_json.records[0] = \n ', personid_json.records[0]);
    console.log('\n/////to see particulary record[0] PersonContactId field//////-------------------------');
    //console.log('\n personid_json.records[0].attributes =', personid_json.records[0].attributes);
    const personcontactid = await personid_json.records[0].PersonContactId;
    console.log('PersonContactId =', personcontactid);
    
    //0.3. Find Patient ID
    console.log("\n0.3. Find Patient ID.");
    const patientAccID = await request.get(getSQLPatientId, {
      headers:{
        Authorization : "Bearer " + access_token,
      },
    });
    expect (patientAccID.status()).toBe(200);
    expect (patientAccID.ok()).toBeTruthy();
    await expect(patientAccID).toBeOK();
    const patientAccID_json = await patientAccID.json();
    console.log(patientAccID_json);
    const patientaccid = await patientAccID_json.records[0].Id;
    console.log('Patient Account Id =', patientaccid);

    //0.4. Find Case ID
    console.log("\n0.4. Find Case ID.");
    const getSQLCaseId =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+Id+FROM+Case+WHERE+ContactId='"+ personcontactid +"'";
    const caseId = await request.get(getSQLCaseId, {
      headers:{
        Authorization : "Bearer " + access_token,
      },
    });
    expect (caseId.status()).toBe(200);
    expect (caseId.ok()).toBeTruthy();
    await expect(caseId).toBeOK();
    const caseId_json = await caseId.json();
    console.log(caseId_json);
    const caseid = await caseId_json.records[0].Id;
    console.log('Case Id =', caseid);
    if (caseid.totalSize != 0){
      //0.5.remove 'Case' first
      console.log("\n0.5. Delete Patient Case for 'Kenton Troup' from Cases .");
      const deleteCaseEndPoit =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v50.0/sobjects/Case/"+caseid+"";
      const deleteCase = await request.delete(deleteCaseEndPoit, {
        headers:{
          Authorization : "Bearer " + access_token,
        }
      });
      expect (deleteCase.status()).toBe(204);
      //0.6.and remove the actual "Kenton Troup"
      console.log("\n0.6. Delete Patient account for 'Kenton Troup' from Account.");
      const deleteAccountEndPoit =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v50.0/sobjects/Account/"+patientaccid+"";
      const deleteAccount = await request.delete(deleteAccountEndPoit, {
        headers:{
          Authorization : "Bearer " + access_token,
        }
      });
      expect (deleteAccount.status()).toBe(204);
    }
    else{
      console.log("/*--Finish API Preconditioning because no 'Cases' for 'Kenton' Dups.");
    }
  }
  else {
    console.log("/*--Finish API Preconditioning because no Patient 'Kenton' Dups.");
  }

  
  
});


test('Can_Register_on_iPhone11', async ({ page }, testInfo) => {
  console.log("Default timeout is: " +testInfo.timeout);
  //test.setTimeout(80000);
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register myself or my family' }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Kenton');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Troup');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010088');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('05');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1959');
  await page.getByPlaceholder('MM').click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  
  await page.getByRole('combobox', { name: 'Street address' }).
  click();
  await page.getByRole('combobox', { name: 'Street address' }).fill('309-7631 Francis Rd');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByText('BC', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Preferred name (optional)').click();
  await page.getByLabel('Preferred name (optional)').fill('Preferred Kenton');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor111.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor111.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(778) 879-1111_');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.locator('[id="\\32 -400"]').getByText('Phone').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-2222_');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  await page.locator('#input103-490').click();
  await page.locator('#input103-490').fill('Kurdecha');
  await page.locator('#input107-500').click();
  await page.locator('#input107-500').fill('Richmond');
  await page.locator('label').filter({ hasText: 'Moving out of the town or' }).locator('span').first().click();
  await page.locator('#comboboxId-527').click();
  await page.getByText('Less than 5 km').click();
  await page.locator('#comboboxId-537').click();
  await page.getByText('Female').click();
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  await page.locator('#inputId-555').click();
  await page.locator('#inputId-555').fill('bulgari');
  await page.getByText('Bulgarian').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('label').filter({ hasText: 'Major surgery (stents, heart' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Chronic infectious diseases,' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  /////just for work around
  await page.getByRole('button', { name: 'Continue' }).click();
  /////just for work around
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();
  await page.getByRole('button', { name: 'Add a family member' }).click();
  await page.getByRole('heading', { name: 'Information' }).click();
});