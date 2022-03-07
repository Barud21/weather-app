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

  it("checks if gets response after submitting data", () => {
    // given
    websiteIsOpened();

    // when
    inputData("52", "21");
    submitData();

    // then
    resultAfterSubmitting();
  });

  it("checks if does not get response when latitude is missing", () => {
    // given
    websiteIsOpened();

    // when
    inputData(" ", "21");

    // then
    resultWhenDataIsMissing();
  });

  it("checks if does not get response when longitude is missing", () => {
    // given
    websiteIsOpened();

    // when
    inputData("52", " ");

    // then
    resultWhenDataIsMissing();
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function inputData(lat: string, lon: string) {
  cy.get(".latitude").type(lat);
  cy.get(".longitude").type(lon);
}

function submitData() {
  cy.get(".btn-submit").click();
}

function resultBeforeSubmitting() {
  cy.get(".temp").should("be.empty");
  cy.get(".pressure").should("be.empty");
  cy.get(".humidity").should("be.empty");
}

function resultAfterSubmitting() {
  cy.get(".temp").should("not.equal", "");
  cy.get(".pressure").should("not.equal", "");
  cy.get(".humidity").should("not.equal", "");
}

function resultWhenDataIsMissing() {
  cy.get(".temp").should("be.empty");
  cy.get(".pressure").should("be.empty");
  cy.get(".humidity").should("be.empty");
}
