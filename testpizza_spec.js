describe('My Test', () => {
    it('Pizzeria de Valou', () => {
        cy.visit('https://pizza-val.netlify.app/');
    });

    it('vérifier bouton Paypal caché', () => {
        cy.get('#commande').should("have.css", "display", "none");
    });

    it('ajouter une Mega Fromage', () => {
        cy.get("li:first-child .plus").click();
        cy.get("li:first-child .qt").should("have.text", "1");
        cy.get("li:first-child .totalligne").should("have.text", "10");
        cy.get("#amount").should("have.value", "10");
    });    

    it('vérifier bouton Paypal affiché', () => {
        cy.get("#commande").should("have.css", "display", "block");
    });

    it('cliqué 2 fois sur moins = 0 en quantité et non -1', () => {
        cy.get("li:first-child .moins").click();
        cy.get("li:first-child .moins").click();
        cy.get("li:first-child .qt").should("have.text", "0");
    });

    it("grosse commande", () => {
        cy.get("li:first-child .plus").click();
        cy.get("li:first-child .plus").click();
        cy.get("li:nth-child(3) .plus").click();
        cy.get("li:nth-child(6) .plus").click();
        cy.get("li:nth-child(7) .plus").click();
        cy.get("#amount").should("have.value", "50");
        cy.get("#description").should("have.value","Mega Fromage x 2 + Latina x 1 + 3 jambons x 1 + Far-West x 1");
    });
});
