describe("Créer un usager", () => {
    beforeEach(() => {
      cy.visit("/login/connection");
      cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
    });
  
   // for (let i = 1; i <= 2; i++) {
      it.skip(`Exécution ${i}`, () => {
        // Choisissez un site
        cy.get(':nth-child(2) > a > span > .icon-modx').click(); 
  
        // Cliquez sur l'icône pour accéder à la page des utilisateurs
        cy.get('.icon-users').click();
  
        // Cliquez sur la roue crantée
        cy.get('.mat-menu-trigger > .mat-tooltip-trigger').click();
  
        // Cliquez sur "Créer un usager"
        cy.get('.mat-menu-content > .d-flex > :nth-child(1) > :nth-child(1)').click();
  
        // Remplissez le formulaire avec des données aléatoires
        const faker = require('faker');
        const randomFirstName = faker.name.firstName();
        const randomLastName = faker.name.lastName();
        const randomEmail = faker.internet.email();
        const randomPhoneNumber = faker.phone.phoneNumber('06########');
        
  
        cy.get('#lastName').type(randomFirstName);
        cy.get('#firstName').type(randomLastName);
        cy.get('#mat-select-value-5').click();
        cy.get('#mat-option-7 > .mat-option-text').click();
        cy.get('#registrationNumber').type("859635");
        cy.get('.ms-0 > .btn-group > .btn').click();
        cy.get('.with-label > .input-form').type("+33");
        cy.get('[formcontrolname="number"]').type(randomPhoneNumber);
        cy.get('.contact > :nth-child(2) > .input-form').type(randomEmail);
        cy.get('.bottom > .btn-primary').click();
      });
   // }
  
      it.skip("Modifier les information d'un usager", () => {


        cy.get(':nth-child(2) > a > span > .icon-modx').click();
        cy.get('.icon-users').click()
        cy.get(':nth-child(9) > .cdk-column-isSynced').click()
        cy.get('.mat-menu-trigger > .mat-tooltip-trigger').click()
        cy.get('.mat-focus-indicator').should('be.visible').click()
        cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('#mat-option-8 > .mat-option-text').click()
        cy.get('.bottom > .btn-primary').click()
      
      
        

    
    });

})
