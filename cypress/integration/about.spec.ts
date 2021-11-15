/// <reference types="cypress" />

describe("<About />", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("should render the about page", () => {
    expect(true).to.equal(true);
  });
});

export {};
