describe("Rsmart", () => {
    beforeEach("Je me connecte", function() {
      cy.visit("/login/connection");
      cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
      cy.fixture('user.json').then(formulaire=>{
        this.formulaire=formulaire

      })
    });

    it("Création un utilisateur", function() {
      //cy.visit("/login/connection"); 
      //cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
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
      const email = '//input[@id="email"]'
      const tel = '//input[@id="phone"]'
      const select_site = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/form/div[2]/div[1]/div[2]/div[1]/div[1]/div/mat-form-field'
      const choix_site = '//span[normalize-space()="Site Nice"]'
      const select_lang = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/form/div[2]/div[3]/div[2]/div/mat-form-field'
      const choix_lang = '//span[normalize-space()="FRANÇAIS"]'
      const select_role_site = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/form/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/mat-form-field'
      const choix_role_site = '//span[normalize-space()="Nice_site_manager"]'
      const button_save = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/div[2]/button[2]'
      cy.xpath(identifiant).type(this.formulaire.id);
      cy.xpath(nom).type(this.formulaire.nom);
      cy.xpath(prenom).type(this.formulaire.prenom);
      cy.xpath(email).type(this.formulaire.email);
      cy.xpath(tel).type(this.formulaire.tel);
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

    it("Test log", () => {
      cy.log("This is the New Test"); 
  
    });

})