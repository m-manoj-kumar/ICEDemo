///<reference types = "cypress"/>

import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import { ICEPortalElements } from "../../POM/ICEPortalElements"
const TestData = require("../../fixtures/ICEPortalTestData.json")

const ICEElements = new ICEPortalElements()

Given("The ICE Portal web address", ()=>{
    cy.visit("/")
})

And("Validated the home page title and url", ()=>{
    cy.title().should('have.text', TestData.HomePage.HomePageTitle)
    cy.url().should('include', TestData.HomePage.webSite)
})

Then("Validated the {String} heading", (titleMain)=>{
    ICEElements.verifyTitleMain(titleMain)
    ICEElements.verifyFancyFeasting()
})

When("Cliked on Fancy Feasting", ()=>{
    ICEElements.clickFancyFeasting()
})

Then("Validated Fancy Feasting page title, url and title main", ()=>{
    cy.title().should('have.text', TestData.FancyFeast.fancyFeastTPageitle)
    cy.url().should('include', TestData.FancyFeast.fancyFeastUrl)
    ICEElements.verifyTitleMain(TestData.FancyFeast.fancyFeastMainTitle)
})

Then("Validated Action main title", ()=>{
    ICEElements.verifyTitleMain(TestData.FancyFeast.actionTitle)
})

And("Validated Menu: Vegan BIO pretzel snack sauerkraut & mustard", ()=>{
    ICEElements.verifyMenuItem(TestData.FancyFeast.menuItem, TestData.FancyFeast.menuItemDesc)
})

Then("Click back button in Fancy Feasting page", ()=>{
    ICEElements.clickBackButton()
})