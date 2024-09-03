import { test, expect, devices } from '@playwright/test';

const baseURL ='https://healthbc--hlthbcqax.sandbox.my.salesforce.com';
const authServiceEndPoint = 'https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/oauth2/token';
const getSQLPersonContactId_Kenton =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+PersonContactId+FROM+Account+WHERE+FirstName='Kenton'+AND+LastName='Troup'";
const getSQLPatientId_Kenton =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+Id+FROM+Account+WHERE+FirstName='Kenton'+AND+LastName='Troup'";

const username = 'igor.emelyanov@phsa.ca.hlthbcqax';
const password = 'Technology1990!!!!!!'; 
const grant_type = 'password';
const client_id = '3MVG9696SH3dTknKbdxhNDTR98rD3LhWik.OvhaW7ISUybXFrutu8ldn_9fcrioqY0CHuIkqle.I2Jt8HNyHX';
const client_secret = '9D94BF2AC8F10AD78CA87CB945CCE6E971DFC5D899793110E8FDBD031A6F1E94';



test('API_Preconditioning_Removing_Dups_Kenton Troup', async ({request, baseURL}) => {
  /////Pre Conditioning API Remove dups Kenton Trup
  console.log("/*0.---Pre-Condition API Remove 'Kenton Troup' with the Case from SF --*/");
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
  console.log("\n0.2. Select PersonContactID 'Kenton Troup' from Account.");
  const personContactID = await request.get(getSQLPersonContactId_Kenton, {
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
    const patientAccID = await request.get(getSQLPatientId_Kenton, {
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


test('Can_Register_Person_In_My_Care_KENTON_TROUP_for_Attached_in_Portal', async ({ page }, testInfo) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('heading', { name: 'I am registering a person in' }).click();
  await page.getByRole('button', { name: 'Register a person in my care' }).click();
  await page.getByRole('combobox', { name: 'Your relationship to this' }).click();
  await page.getByText('Legal guardian', { exact: true }).click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').fill('Igor EmelyanovLegalGuardian');
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
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).fill('15409 92 Ave');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Fleetwood');
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByText('BC', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).fill('V3R 5V9');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Fleetwood');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Preferred name (optional)').click();
  await page.getByLabel('Preferred name (optional)').fill('Kentonishka PreferredName');
  await page.getByRole('textbox', { name: 'Primary contact name' }).click();
  await page.getByRole('textbox', { name: 'Primary contact name' }).fill('Igor EmelyanovPrimaryContactName');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Confirm email address' }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(778) 879-3333');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Email"]');
  //await page.locator('[id="\\31 -414"]').getByText('Email').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-4444');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  //What is the name of your current family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI Kurdecha Current Family Doctor Selector');
  //await page.locator('#input109-517').click();
  //await page.locator('#input109-517').fill('AI Kurdecha Current Family Doctor Selector');
  //Which town or city is your current family doctor or nurse practitioner located in?
  await page.click('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input', 'Fleetwood');
  //await page.locator('#input113-527').click();
  //await page.locator('#input113-527').fill('Fleetwood');
  //Why are you looking for a family doctor or nurse practitioner?
  await page.locator('label').filter({ hasText: 'Current family doctor or nurse practitioner is moving out of town or city' }).locator('span').first().click();
  //How far from your home are you able to travel to see a family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] .slds-listbox__option[data-value="Less than 50 km"]');
  //await page.locator('#comboboxId-554').click();
  //await page.getByText('Less than 50 km').click();
  //Doctor's Gender
  await page.click('omnistudio-omniscript-select[data-omni-key="genderForPractitioner"] input')
  //await page.locator('#comboboxId-564').click();
  await page.getByText('Female').click();
  //Do you need a translator?
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  // "What Language"
  await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Ital');
  //await page.locator('#inputId-582').click();
  //await page.locator('#inputId-582').fill('Ital');
  await page.getByText('Italian').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('label').filter({ hasText: 'I am pregnant or have' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Seizures or Epilepsy' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByText('Kenton Troup is now on the').click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();
  await page.getByRole('button', { name: 'Start a new registration' }).click();
});