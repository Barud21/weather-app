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

  it("checks if primary source is selected", () => {
    // given
    websiteIsOpened();

    // when

    // then
    resultPrimarySource();
  });

  it("checks if alternative source is selected", () => {
    // given
    websiteIsOpened();

    // when
    clickToggleSwitch();

    // then
    resultAlternativeSource();
  });

  it("checks if does not get response after submitting incorrect data", () => {
    // given
    websiteIsOpened();

    // when
    inputData("52.231", "21.982");
    submitData();

    // then
    resultBeforeSubmitting();
  });

  it("checks if does not get response after submitting data out of range", () => {
    // given
    websiteIsOpened();

    // when
    inputData("100", "200");
    submitData();

    // then
    resultBeforeSubmitting();
  });

  it("checks if does not get response after submitting data out of range", () => {
    // given
    websiteIsOpened();

    // when
    inputData("-100", "-200");
    submitData();

    // then
    resultBeforeSubmitting();
  });

  it("checks if gets response after pressing Enter", () => {
    // given
    websiteIsOpened();

    // when
    inputData("52", "21");
    pressKey();

    // then
    resultAfterSubmitting();
  });

  it("checks if does not get response after pressing switch but before submitting", () => {
    // given
    websiteIsOpened();

    // when
    inputData("52", "21");
    clickToggleSwitch();

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

function submitData() {
  cy.get(".btn-submit").click();
}

function resultBeforeSubmitting() {
  cy.get("#temp").should("be.empty");
  cy.get("#pressure").should("be.empty");
  cy.get("#humidity").should("be.empty");
}

function resultAfterSubmitting() {
  cy.get("#temp").should("not.be.empty");
  cy.get("#pressure").should("not.be.empty");
  cy.get("#humidity").should("not.be.empty");
}

function resultWhenDataIsMissing() {
  cy.get("#temp").should("be.empty");
  cy.get("#pressure").should("be.empty");
  cy.get("#humidity").should("be.empty");
}

function clickToggleSwitch() {
  cy.get(".btn-switch").click();
}

function resultPrimarySource() {
  cy.get(".primary-source").should("have.class", "bold");
}

function resultAlternativeSource() {
  cy.get(".alternative-source").should("have.class", "bold");
}

function pressKey() {
  cy.get("body").type("{enter}");
}
