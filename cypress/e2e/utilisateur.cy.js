describe("Création d'un utilisateur", () => {
  beforeEach(() => {
    cy.visit("/login/connection");
    cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
  });
  
  for (let i = 1; i <= 7; i++) {
    it(`Exécution ${i}`, () => {
      
     cy.xpath('//div[@aria-haspopup="menu"][1]').should('be.visible');
      cy.xpath('//div[@aria-haspopup="menu"][1]').click();
      cy.xpath('//button[normalize-space()="Utilisateurs"]').click();
      cy.contains('utilisateurs', { matchCase: false }).should('be.visible');
      cy.xpath('//i[@class="mat-tooltip-trigger icon-cog"]').click();
      cy.xpath('//button[normalize-space()="Créer un utilisateur"]').click();
      cy.contains("CRÉATION D'UN UTILISATEUR", { matchCase: false }).should('be.visible');
  
    //Renseigner les informations de l'utilisateur
      const identifiant = '//input[@id="username"]';
      const nom = '//input[@id="lastName"]'
      const prenom = '//input[@id="firstName"]'
      const fonction = '#occupation'
      const email = '//input[@id="email"]'
      const tel = '//input[@id="phone"]'
      const select_site = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/form/div[2]/div[1]/div[2]/div[1]/div[1]/div/mat-form-field'
      const choix_site = '//span[normalize-space()="Site Nice"]'
      const select_lang = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/form/div[2]/div[3]/div[2]/div/mat-form-field'
      const choix_lang = '//span[normalize-space()="FRANÇAIS"]'
      const select_role_site = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/form/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/mat-form-field'
      const choix_role_site = '//span[normalize-space()="Nice_site_manager"]'
      const button_save = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/div[2]/button[2]'
      
      // Remplissez le formulaire avec des données aléatoires
      const faker = require('faker');
      const randomFirstName = faker.name.firstName();
      const randomLastName = faker.name.lastName();
      const randomEmail = faker.internet.email();
      const randomPhoneNumber = faker.phone.phoneNumber('06########');
      const randomIdentifier = faker.random.alphaNumeric(7);

      

      cy.xpath(identifiant).type(randomIdentifier);
      cy.xpath(nom).type(randomFirstName);
      cy.xpath(prenom).type(randomLastName);
      cy.get(fonction).type("DEV");
      cy.xpath(email).type(randomEmail);
      cy.xpath(tel).type(randomPhoneNumber);
      cy.scrollTo('bottom');
      cy.xpath(select_site).click();
      cy.xpath(choix_site).click();
      cy.xpath(select_role_site).click();
      cy.xpath(choix_role_site).click();
      cy.xpath(select_lang).click();
      cy.xpath(choix_lang).click();
      cy.xpath(button_save).click();
      cy.get('.ng-star-inserted > img').click()
  
    });
  }
    it("Test log", () => {
      cy.log("This is the New Test"); 
  
    });

  });