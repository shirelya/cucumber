package com.hsx.CTest;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsImp {
	private static String url="https://csc-ems-t1-ems-test.cfapps.sap.hana.ondemand.com";
	private static final Logger LOGGER = Logger.getLogger(StepsImp.class.getName());
	private WebDriver driver;
	
	@Given("^Go to Free Defined Attributes Configuration Page$")
	public void go_to_Free_Defined_Attributes_Configuration_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();  
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);  
        
        driver.findElement(By.id("j_username")).sendKeys("sapemstestadmint1@exchange.sap.corp");
		driver.findElement(By.id("j_password")).sendKeys("Initial0");
		driver.findElement(By.id("logOnFormSubmit")).click();
		LOGGER.info("Login in successfully");
		Thread.sleep(10000);
		driver.findElement(By.id("__content2")).click();
		LOGGER.info("Go to Free Defined Attributes Configuration Page successfully");
		Thread.sleep(10000);
	}

	@When("^Click Create Button$")
	public void click_Create_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("__xmlview1--createButtonId")).click();
	}

	@When("^Input Attribute Name \"([^\"]*)\" ID \"([^\"]*)\" Description \"([^\"]*)\" Choose Category, Data Type, Unit and Value List$")
	public void input_Attribute_Name_ID_Description_Choose_Category_Data_Type_Unit_and_Value_List(String AttrName, String AttrID, String Description) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("__xmlview1--AttributeName-inner")).sendKeys("AttrName");
		driver.findElement(By.id("__xmlview1--ID-inner")).sendKeys("AttrID");
		driver.findElement(By.id("__xmlview1--Description-inner")).sendKeys("Description");
		
		driver.findElement(By.id("__xmlview1--Category-arrow")).click();
		driver.findElement(By.id("__item16-selectMulti-CbBg")).click();
		driver.findElement(By.id("__xmlview1--Category-arrow")).click();
		Thread.sleep(5000);
		driver.findElement(By.id("__xmlview1--DataType-arrow")).click();
		driver.findElement(By.id("__item6-__xmlview1--DataType-1")).click();
		//driver.findElement(By.xpath("//select[@id='__xmlview1--DataType-arrow']/option[@value='String']")).click();
		Thread.sleep(5000);
	}

	@When("^Click Publish Button$")
	public void click_Publish_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("__button7")).click();
	}

	@Then("^Check ExpectedResult \"([^\"]*)\"$")
	public void check_ExpectedResult(String ExpectedResult) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals("Configuration for Entitlement Attributes", driver.getTitle());
		LOGGER.info(ExpectedResult);
		driver.navigate().refresh();
		driver.findElement(By.id("__xmlview1--entlAttrtable-rowsel0")).click();
		driver.findElement(By.id("__xmlview1--deleteButtonId")).click();
		driver.findElement(By.id("__mbox-btn-0")).click();
		driver.quit();
	}
}
