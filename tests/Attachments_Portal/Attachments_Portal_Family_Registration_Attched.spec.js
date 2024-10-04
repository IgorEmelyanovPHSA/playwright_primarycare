const {test, expect} = require('@playwright/test')

const baseURL ='https://healthbc--hlthbcqax.sandbox.my.salesforce.com';
const authServiceEndPoint = 'https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/oauth2/token';
const getSQLPersonContactId =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+PersonContactId+FROM+Account+WHERE+FirstName='Sandy'+AND+LastName='Prior'";
const getSQLPatientId =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+Id+FROM+Account+WHERE+FirstName='Sandy'+AND+LastName='Prior'";

const getSQLPersonContactId_Hollis =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+PersonContactId+FROM+Account+WHERE+FirstName='Hollis'+AND+LastName='Violette'";
const getSQLPatientId_Hollis =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v57.0/query?q=SELECT+Id+FROM+Account+WHERE+FirstName='Hollis'+AND+LastName='Violette'";


const username = 'igor.emelyanov@phsa.ca.hlthbcqax';
const password = 'Technology1990!!!!!!'; 
const grant_type = 'password';
const client_id = '3MVG9696SH3dTknIjs9fMYRuEzlX8D6eI85vSpCGuIcP9AleYA_3qK4uA_2n1GUWsVrjTZ9b1ijpJ5a.iJNQs';
const client_secret = '1BCA00065BB10A53AD7F1D3D9A50A9F86C2E639BB6CF15F686E6955CA0719C2D';


test('API_Preconditioning_Removing_Dups_Sandy_Prior', async ({request, baseURL}) => {
  /////Pre Conditioning API Remove dups Sandy Prior
  console.log("/*0.---Pre-Condition API Remove 'Sandy Prior' with the Case from SF --*/");
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
  console.log("\n0.2. Select PersonContactID 'Sandy Prior' from Account.");
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
      console.log("\n0.5. Delete Patient Case for 'Sandy Prior' from Cases .");
      const deleteCaseEndPoit =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v50.0/sobjects/Case/"+caseid+"";
      const deleteCase = await request.delete(deleteCaseEndPoit, {
        headers:{
          Authorization : "Bearer " + access_token,
        }
      });
      expect (deleteCase.status()).toBe(204);
      //0.6.and remove the actual "Kenton Troup"
      console.log("\n0.6. Delete Patient account for 'Sandy Prior' from Account.");
      const deleteAccountEndPoit =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v50.0/sobjects/Account/"+patientaccid+"";
      const deleteAccount = await request.delete(deleteAccountEndPoit, {
        headers:{
          Authorization : "Bearer " + access_token,
        }
      });
      expect (deleteAccount.status()).toBe(204);
    }
    else{
      console.log("/*--Finish API Preconditioning because no 'Cases' for 'Sandy' Dups.");
    }
  }
  else {
    console.log("/*--Finish API Preconditioning because no Patient 'Sandy' Dups.");
  }

  
  
});

test('API_Preconditioning_Removing_Dups_Hollis_Violette', async ({request, baseURL}) => {
  /////Pre Conditioning API Remove dups Hollis Violette
  console.log("/*0.---Pre-Condition API Remove 'Hollis Violette' with the Case from SF --*/");
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
  console.log("\n0.2. Select PersonContactID 'Hollis Violette' from Account.");
  const personContactID = await request.get(getSQLPersonContactId_Hollis, {
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
    const patientAccID = await request.get(getSQLPatientId_Hollis, {
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
      console.log("\n0.5. Delete Patient Case for 'Hollis Violette' from Cases .");
      const deleteCaseEndPoit =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v50.0/sobjects/Case/"+caseid+"";
      const deleteCase = await request.delete(deleteCaseEndPoit, {
        headers:{
          Authorization : "Bearer " + access_token,
        }
      });
      expect (deleteCase.status()).toBe(204);
      //0.6.and remove the actual "Kenton Troup"
      console.log("\n0.6. Delete Patient account for 'Hollis Violette' from Account.");
      const deleteAccountEndPoit =  "https://healthbc--hlthbcqax.sandbox.my.salesforce.com/services/data/v50.0/sobjects/Account/"+patientaccid+"";
      const deleteAccount = await request.delete(deleteAccountEndPoit, {
        headers:{
          Authorization : "Bearer " + access_token,
        }
      });
      expect (deleteAccount.status()).toBe(204);
    }
    else{
      console.log("/*--Finish API Preconditioning because no 'Cases' for 'Hollis Violette' Dups.");
    }
  }
  else {
    console.log("/*--Finish API Preconditioning because no Patient 'Hollis Violette' Dups.");
  }

  
  
});

test('Can_do_Family_Registration_SANDY_PRIOR_And_HOLLIS_VIOLETTE_Attached_in_Portal', async ({page}) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  ///////////1. Register Sandy Prior, FIRST  ///////////////
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register myself or my family' }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Sandy');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Prior');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010063');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('03');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('01');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1975');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
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
  await page.getByLabel('Preferred name (optional)').fill('Sandynavia Preferred Name');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Confirm email address' }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('7788791111');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Email"]');
  //await page.locator('[id="\\31 -414"]').getByText('Email').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-2222');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'No' }).locator('span').first().click();
  //What is your most recent family doctor?
  await page.click('omnistudio-omniscript-text[data-omni-key="mostRecentPractitionerName"] input');
  //await page.locator('#input111-519').click();
  await page.fill('omnistudio-omniscript-text[data-omni-key="mostRecentPractitionerName"] input', 'AI Kurdecha most Recent Family Doctor Selector');
  //await page.locator('#input111-519').fill('Kurdecha Family Doctor');
  await page.click('omnistudio-omniscript-text[data-omni-key="lastPractitionerVisit"] input');
  //await page.locator('#input115-535').click();
  await page.fill('omnistudio-omniscript-text[data-omni-key="lastPractitionerVisit"] input', 'AI 5 years ago last seen :)');
  //await page.locator('#input115-535').fill('5 years ago last seen :)');
  //How far
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] .slds-listbox__option[data-value="Less than 5 km"]');
  //await page.locator('#comboboxId-554').click();
  //await page.getByText('Less than 5 km').click();
  //Doctor's Gender
  await page.click('omnistudio-omniscript-select[data-omni-key="genderForPractitioner"] input')
  //await page.locator('#comboboxId-564').click();
  await page.getByText('Female').click();
  //Do you need a translator?
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  // "What Language"
  await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
  //await page.locator('#inputId-582').click();
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'German');
  //await page.locator('#inputId-582').fill('German');
  await page.getByText('German', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Health Questionary
  await page.locator('label').filter({ hasText: 'I am pregnant or have' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Stroke or Transient Ischemic' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByText('Sandy Prior, you are now on').click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();

 ///////////2. Register Family Member "Hollis Violette" /////////////////////////
  await page.getByRole('button', { name: 'Add a family member' }).click();
  await page.getByRole('combobox', { name: 'This person’s relationship to' }).click();
  await page.getByText('My parent').click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Hollis');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Violette');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873009789');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('04');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('12');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1947');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Preferred name (optional)').click();
  await page.getByLabel('Preferred name (optional)').fill('Violline Prefferd Name - Mom of Sandy');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  //What is the name of your current family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI Kurdecha Current Family Doctor Selector');
  //await page.locator('#input235-1294').click();
  //await page.locator('#input235-1294').fill('Kurdecha Current Family Doctor');
  //Which town or city is your current family doctor or nurse practitioner located in?
  await page.click('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input', 'Fleetwood');
  //await page.locator('#input239-1304').click();
  //await page.locator('#input239-1304').fill('Fleetwood');
  //Why are you looking for a family doctor or nurse practitioner?
  await page.locator('label').filter({ hasText: 'Current family doctor or nurse practitioner is moving out of town or city' }).locator('span').first().click();
  //How far from your home are you able to travel to see a family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] .slds-listbox__option[data-value="Less than 20 km"]');
  //await page.locator('#comboboxId-1331').click();
  //await page.getByText('Less than 20 km').click();
  //Do you need a translator?
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  //In what language do you need a translator?
  await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'canton');
  //await page.locator('#inputId-1359').click();
  //await page.locator('#inputId-1359').fill('canton');
  await page.getByText('Cantonese').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Health Questionary
  await page.locator('label').filter({ hasText: 'I am pregnant or have' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Stroke or Transient Ischemic' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByText('Hollis Violette is now on the').click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();
})