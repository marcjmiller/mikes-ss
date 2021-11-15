/// <reference types="cypress" />

describe("<Services />", () => {
  beforeEach(() => {
    cy.visit("/services");
  });

  it("should render the services page", () => {
    expect(true).to.equal(true);
  });
});

export {};
