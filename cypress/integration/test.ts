import cypress from "cypress";

describe("test", () => {
  it("checks if does not get response when not submitted", () => {
    // given
    websiteIsOpened();

    // when
    inputData("52", "21");

    // then
    resultBeforeSubmitting();
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function inputData(lat: string, lon: string) {
  cy.get(".latitude").type(lat);
  cy.get(".longitude").type(lon);
}

function resultBeforeSubmitting() {
  cy.get(".temp").should("be.empty");
  cy.get(".pressure").should("be.empty");
  cy.get(".humidity").should("be.empty");
}
