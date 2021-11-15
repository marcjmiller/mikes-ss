/// <reference types="cypress" />

describe("<Index />", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render a navbar, content, and footer", () => {
    cy.get(".navbar").should("exist");
    cy.get(".content").should("exist");
    cy.get(".footer").should("exist");
  });
});

// make it a module please, thx
export {};
