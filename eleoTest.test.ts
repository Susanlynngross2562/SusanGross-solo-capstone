import {Driver} from "selenium-webdriver/chrome";
import {pageObjects} from "./eleoPageObjects";

const eleo = new pageObjects()
/*
describe("Test Case 1", () => {
    test("Add a contact with Save", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.click(eleo.addContact)
        await eleo.setInput(eleo.firstNameInput, "Harry")
        await eleo.setInput(eleo.lastNameInput, "Potter")
        await eleo.setInput(eleo.address1Input, "55 Hogwarts Blvd")
        await eleo.setInput(eleo.cityInput, "London")
        await eleo.setInput(eleo.stateInput, "NJ")
        await eleo.setInput(eleo.zipInput, "55555")
        await eleo.setInput(eleo.phoneInput, "555-555-1000")
        await eleo.setInput(eleo.emailInput, "harrypotter987123@woohoo.com")
        await eleo.click(eleo.saveBtn)
        await eleo.driver.sleep(3000)
        await eleo.driver.quit()
    })
})

describe("Test Case 2", () => {
    test("Add a contact with Save and Contintue", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.click(eleo.addContact)
        await eleo.setInput(eleo.firstNameInput, "George")
        await eleo.setInput(eleo.lastNameInput, "Jetson")
        await eleo.setInput(eleo.address1Input, "11 Skyline Lane")
        await eleo.setInput(eleo.cityInput, "Bensalem")
        await eleo.setInput(eleo.stateInput, "PA")
        await eleo.setInput(eleo.zipInput, "19020")
        await eleo.setInput(eleo.phoneInput, "455-555-1000")
        await eleo.setInput(eleo.emailInput, "georgejetson987123@woohoo.com")
        await eleo.click(eleo.saveContinueBtn)
        await eleo.driver.sleep(3000)
        await eleo.driver.quit()
    })
})

describe("Test Case 3", () => {
    test("Add a contact with Save and Add a Gift", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.click(eleo.addContact)
        await eleo.setInput(eleo.firstNameInput, "Mary")
        await eleo.setInput(eleo.lastNameInput, "Poppins")
        await eleo.setInput(eleo.address1Input, "1203 Park Ave")
        await eleo.setInput(eleo.cityInput, "Princeton")
        await eleo.setInput(eleo.stateInput, "NJ")
        await eleo.setInput(eleo.zipInput, "08540")
        await eleo.setInput(eleo.phoneInput, "455-555-3335")
        await eleo.setInput(eleo.emailInput, "marypoppins987123@woohoo.com")
        await eleo.click(eleo.saveWithGiftBtn)
        await eleo.driver.sleep(3000)
        await eleo.driver.quit()
    })
})
*/
describe("Test Case 4", () => {
    test("Search for a Contact with a Full Name", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.setInput(eleo.contactInputFilter, "Tinker Bell")
        await eleo.click(eleo.searchBtn)
        await eleo.driver.sleep(2000)
        //expect??
        await eleo.driver.quit()
    })
})

describe("Test Case 5", () => {
    test("Search for a Contact with a First Name", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.setInput(eleo.contactInputFilter, "Tinker")
        await eleo.click(eleo.searchBtn)
        await eleo.driver.sleep(2000)
        await eleo.driver.quit()
    })
})

describe("Test Case 6", () => {
    test("Search for a Contact with a Last Name", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.setInput(eleo.contactInputFilter, "Bell")
        await eleo.click(eleo.searchBtn)
        await eleo.driver.sleep(2000)
        await eleo.driver.quit()
    })
})

describe("Test Case 7", () => {
    test("Search for a Contact with only Special Characters", async () => {
        await eleo.loginDatabase()
        await eleo.click(eleo.mainContactTab)
        await eleo.setInput(eleo.contactInputFilter, '?>":%#$%<!')
        await eleo.click(eleo.searchBtn)
        await eleo.driver.sleep(2000)
        await eleo.driver.quit()
    })
})