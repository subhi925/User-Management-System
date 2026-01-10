describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("User should go to dashboard", () => {
    cy.get('[data-cy="login-email"]').type("user@test.com");
    cy.get('[data-cy="login-password"]').type("123456");
    cy.get('[data-cy="login-btn"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Admin should go to admin panel", () => {
    cy.get('[data-cy="login-email"]').type("admin@test.com");
    cy.get('[data-cy="login-password"]').type("123456");
    cy.get('[data-cy="login-btn"]').click();
    cy.url().should("include", "/admin");
  });
});
