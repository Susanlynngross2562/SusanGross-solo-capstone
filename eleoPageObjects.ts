import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class pageObjects extends BasePage {
    userName: By = By.css('[name="ctl00$MainContent$LoginName"]')
    passWord: By = By.css('[name="ctl00$MainContent$Password"]')
    logIn: By = By.css('[name="ctl00$MainContent$LoginButton"]')
    mainContactTab: By = By.xpath('//li[@id = "ctl00_Menu1_Main_Contacts"]')
    addContact: By = By.xpath('//a[@id="ctl00_MainContent_btnAdd_link1"]')
    firstNameInput: By = By.xpath('//input[@name="ctl00$MainContent$txtFirstName"]')
    lastNameInput: By = By.xpath('//input[@name="ctl00$MainContent$txtLastName"]')
    address1Input: By = By.xpath('//input[@name="txtFirstAddress2"]')
    cityInput: By = By.xpath('//input[@name="txtCity2"]')
    stateInput: By = By.xpath('//input[@name="txtState2"]')
    zipInput: By = By.xpath('//input[@name="txtZip2"]')
    phoneInput: By = By.xpath('//input[@name="txtPhone2"]')
    emailInput: By = By.xpath('//input[@name="txtEmail2"]')
    saveBtn: By = By.css('#ctl00_MainContent_btnSave_link1')
    saveContinueBtn: By = By.css('#ctl00_MainContent_btnSaveAndEdit_link1')
    saveWithGiftBtn: By = By.css('#ctl00_MainContent_btnSaveAndGift_link1')
    contactInputFilter: By = By.xpath('//input[@name="ctl00$MainContent$ContactSearchControl1$txtSearchName"]')
    searchBtn: By = By.css('#ctl00_MainContent_btnSearch_link1')
    tinkerBellContact: By = By.xpath('//tr[@id="ctl00_MainContent_CSSGrid1_grid_DXDataRow0"]')
    contactGiftTab: By = By.xpath('//a[@id="ctl00_MainContent_CSSTabGroup1_cssTab1_link1"]')
    addGiftBtn: By = By.xpath('//a[@id="ctl00_MainContent_btnAddGift_link1"]')
    paymentType: By = By.xpath('//select[@name="ctl00$MainContent$ddlGiftType"]')
    cashPayment: By = By.xpath('//option[text()="Cash"]')
    amountInput: By = By.xpath('//input[@name="ctl00$MainContent$txtAmount"]')
    fundField: By = By.xpath('//select[@name="ctl00$MainContent$ddlFund"]')
    generalFund: By = By.xpath('//option[text()="General Fund"]')
    giftSaveBtn: By = By.xpath('//a[@id="ctl00_MainContent_save_link1"]')

    constructor() {
        super({url: "https://eleoonline.net/Pages/SystemAccess/Login.aspx"})
    }
    
    async loginDatabase () {
        await this.navigate(this.url)
        await this.setInput(this.userName, "suegross")
        await this.setInput(this.passWord, "Easy123!")
        await this.click(this.logIn)
        await this.driver.sleep(2000)
    }
/*
    async addNewContact () {
        await this.click(this.mainContactTab)
        await this.click(this.addContact)
        await eleo.setInput(eleo.firstNameInput, "Harry")
        await eleo.setInput(eleo.lastNameInput, "Potter")
        await eleo.setInput(eleo.address1Input, "55 Hogwarts Blvd")
        await eleo.setInput(eleo.cityInput, "London")
        await eleo.setInput(eleo.stateInput, "NJ")
        await eleo.setInput(eleo.zipInput, "55555")
        await eleo.setInput(eleo.phoneInput, "555-555-1000")
        await eleo.setInput(eleo.emailInput, "harrypotter987123@woohoo.com")
    }
*/

}