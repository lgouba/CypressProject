describe("Inventaire", () => {

    beforeEach(() => {
        cy.visit("/login/connection");
        cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
      });

    it.skip("Ajout d'une zone Géographique", () => {
        //cy.visit("/login/connection"); 
        //cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
        cy.get(':nth-child(2) > a > span > .icon-modx').click()
        cy.get('.icon-inventory').click()
        cy.get('.mat-menu-trigger > .mat-tooltip-trigger').click()
        cy.get('.mat-focus-indicator').click()
        cy.get('.mat-form-field-infix').click()
        cy.get('#mat-option-1 > .mat-option-text').click()
        cy.get('.btn').click()
        cy.get('#name').type("Mairie Arenas")
        cy.get('.leaflet-draw-draw-polygon').click()
        cy.get('.ng-pristine > .map').click()

         // Récupération de l'élément de la carte
        cy.get('.ng-pristine > .map').then(($el) => {
        const mapElement = $el[0];

        // Scroll jusqu'à l'élément de la carte pour le rendre visible
        mapElement.scrollIntoView();

        // Récupération des coordonnées du point A
        const pointA = {
        x: mapElement.clientWidth / 2,
        y: mapElement.clientHeight / 2,
        };

        // Clic pour bouger la souris vers la droite
        cy.get('.ng-pristine > .map')
        .trigger('mousemove', pointA.x + 100, pointA.y);

        // Clic pour placer le point B
        cy.get('.ng-pristine > .map')
        .trigger('mousedown', pointA.x + 100, pointA.y)
        .trigger('mouseup', pointA.x + 100, pointA.y);

        // Récupération des coordonnées du point B
        const pointB = {
            clientX: pointA.x + 100, // Utilisez les coordonnées du point B précédemment ajouté
            clientY: pointA.y,
        };
        
        // Clic pour bouger la souris vers le bas à partir du point B
        cy.get('.ng-pristine > .map')
            .trigger('mousemove', pointB.clientX, pointB.clientY + 100);
        
        // Clic pour placer le point C en bas du point B
        cy.get('.ng-pristine > .map')
            .trigger('mousedown', pointB.clientX, pointB.clientY + 100)
            .trigger('mouseup', pointB.clientX, pointB.clientY + 100);
        })
          
      // Récupération de l'élément de la carte
        cy.get('.ng-pristine > .map').then(($el) => {
            const mapElement = $el[0];
        
     // Récupération des coordonnées du point A
            const pointA = {
            clientX: mapElement.clientWidth / 2,
            clientY: mapElement.clientHeight / 2,
            };
        
    // Clic pour bouger la souris vers le point A
            cy.get('.ng-pristine > .map')
            .trigger('mousemove', pointA.clientX, pointA.clientY)
            .trigger('click', pointA.clientX, pointA.clientY);
        });

    // Clic sur le bouton Enregistrer
            cy.get('.bottom > .btn-primary').click()

        })

        it.skip("Ajout d'un batiment dans la zone", () => {
            //cy.visit("/login/connection"); 
            //cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
            cy.get(':nth-child(2) > a > span > .icon-modx').click()
            cy.get('.icon-inventory').click()
            cy.get(':nth-child(2) > .td-can-add-element > .mat-tooltip-trigger').should('be.visible').click()
            cy.get('.mat-form-field-infix').click()
            cy.xpath('//span[normalize-space()="Bâtiment"]').click()    
            cy.get('.btn').click()
            cy.get('#name').type('Bureau Administratif')
            cy.get('#street').type('Général Colbert')
            cy.get('#zipCode').type('06200')
            cy.get('#city').type('Nice')
            cy.get('#country').type('France')
            cy.get('#year').type('2022')
            cy.get('#mat-select-value-3 > .mat-select-placeholder').click()
            cy.get('#mat-option-6 > .mat-option-text').click()
            cy.get('#mat-select-value-5').click()
            cy.get('#mat-option-26 > .mat-option-text').click()

            cy.get('.leaflet-draw-draw-polygon').click()
            cy.get('.ng-pristine > .map').click()

            // Récupération de l'élément de la carte
            cy.get('.ng-pristine > .map').then(($el) => {
            const mapElement = $el[0];

            // Scroll jusqu'à l'élément de la carte pour le rendre visible
            mapElement.scrollIntoView();

            // Récupération des coordonnées du point A
            const pointA = {
            x: mapElement.clientWidth / 2,
            y: mapElement.clientHeight / 2,
            };

            // Clic pour bouger la souris vers la droite
            cy.get('.ng-pristine > .map')
            .trigger('mousemove', pointA.x + 100, pointA.y);

            // Clic pour placer le point B
            cy.get('.ng-pristine > .map')
            .trigger('mousedown', pointA.x + 100, pointA.y)
            .trigger('mouseup', pointA.x + 100, pointA.y);

            // Récupération des coordonnées du point B
            const pointB = {
            clientX: pointA.x + 100, // Utilisez les coordonnées du point B précédemment ajouté
            clientY: pointA.y,
            };

            // Clic pour bouger la souris vers le bas à partir du point B
            cy.get('.ng-pristine > .map')
            .trigger('mousemove', pointB.clientX, pointB.clientY + 100);

            // Clic pour placer le point C en bas du point B
            cy.get('.ng-pristine > .map')
            .trigger('mousedown', pointB.clientX, pointB.clientY + 100)
            .trigger('mouseup', pointB.clientX, pointB.clientY + 100);
            })
            
            // Récupération de l'élément de la carte
            cy.get('.ng-pristine > .map').then(($el) => {
            const mapElement = $el[0];

            // Récupération des coordonnées du point A
            const pointA = {
            clientX: mapElement.clientWidth / 2,
            clientY: mapElement.clientHeight / 2,
            };

            // Clic pour bouger la souris vers le point A
            cy.get('.ng-pristine > .map')
            .trigger('mousemove', pointA.clientX, pointA.clientY)
            .trigger('click', pointA.clientX, pointA.clientY);
            });

            // Clic sur le bouton Enregistrer
            cy.get('.bottom > .btn-primary').click()

            })

            
        it.skip("Ajout d'une pièce dans le Batiment", () => {
            //cy.visit("/login/connection"); 
            //cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
            cy.get(':nth-child(2) > a > span > .icon-modx').click()
            cy.get('.icon-inventory').click()
            cy.get(':nth-child(3) > .td-can-add-element > .mat-tooltip-trigger').click()
            cy.get('#mat-select-value-1').click()
            cy.get('#mat-option-1').click()
            cy.get('.btn').click()
            cy.get('#name').type('Direction génénale')
            cy.get('#roomCategory').type('Administratif')
            cy.get('.leaflet-draw-draw-polygon').click()
        
        });

        it.skip("Ajouter un équipement", () => {
            //cy.visit("/login/connection"); 
           // cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
            cy.get(':nth-child(2) > a > span > .icon-modx').click()
            cy.get('.icon-inventory').click()
            cy.get(':nth-child(3) > .td-can-add-element > .mat-tooltip-trigger').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-0').click()
            cy.get('.btn').click()
            cy.get('#name').type('Capteur 1')
            cy.get('#mat-select-value-3 > .mat-select-placeholder').click()
            cy.get('#mat-option-6').click()
            cy.get('#mat-select-value-5 > .mat-select-placeholder').click()
            cy.get('#mat-option-9').click()
            cy.get('.mat-select-placeholder').click()
            cy.get('#mat-option-10').click()
            cy.get('#id').type('RES1009934')
            cy.get('#lat').type(43.702995)
            cy.get('#lng').type(7.253172)
            //cy.get('.bottom > .btn-primary').click()
 
            });
            
            it("Test log", () => {
                
                cy.log("This is the New Test"); 
            
              });
    })