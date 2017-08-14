$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Entitlement Attribute",
  "description": "          Assert the Entitlement Attribute Creation function",
  "id": "create-new-entitlement-attribute",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create Entitlement Attribute  AttrName",
  "description": "",
  "id": "create-new-entitlement-attribute;create-entitlement-attribute--attrname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to Free Defined Attributes Configuration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click Create Button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Input Attribute Name \"\u003cAttrName\u003e\" ID \"\u003cAttrID\u003e\" Description \"\u003cDescription\u003e\" Choose Category, Data Type, Unit and Value List",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Publish Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Check ExpectedResult \"\u003cExpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "Create Entitlement Attribute  AttrName",
  "description": "",
  "id": "create-new-entitlement-attribute;create-entitlement-attribute--attrname;create-entitlement-attribute--attrname",
  "rows": [
    {
      "cells": [
        "AttrName",
        "AttrID",
        "Description",
        "ExpectedResult"
      ],
      "line": 12,
      "id": "create-new-entitlement-attribute;create-entitlement-attribute--attrname;create-entitlement-attribute--attrname;1"
    },
    {
      "cells": [
        "attr811",
        "ID811",
        "for test",
        "Create successfully"
      ],
      "line": 13,
      "id": "create-new-entitlement-attribute;create-entitlement-attribute--attrname;create-entitlement-attribute--attrname;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Create Entitlement Attribute  AttrName",
  "description": "",
  "id": "create-new-entitlement-attribute;create-entitlement-attribute--attrname;create-entitlement-attribute--attrname;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to Free Defined Attributes Configuration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click Create Button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Input Attribute Name \"attr811\" ID \"ID811\" Description \"for test\" Choose Category, Data Type, Unit and Value List",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Publish Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Check ExpectedResult \"Create successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepsImp.go_to_Free_Defined_Attributes_Configuration_Page()"
});
formatter.result({
  "duration": 45188524121,
  "status": "passed"
});
formatter.match({
  "location": "StepsImp.click_Create_Button()"
});
formatter.result({
  "duration": 621979868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attr811",
      "offset": 22
    },
    {
      "val": "ID811",
      "offset": 35
    },
    {
      "val": "for test",
      "offset": 55
    }
  ],
  "location": "StepsImp.input_Attribute_Name_ID_Description_Choose_Category_Data_Type_Unit_and_Value_List(String,String,String)"
});
formatter.result({
  "duration": 11752019671,
  "status": "passed"
});
formatter.match({
  "location": "StepsImp.click_Publish_Button()"
});
formatter.result({
  "duration": 88500791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Create successfully",
      "offset": 22
    }
  ],
  "location": "StepsImp.check_ExpectedResult(String)"
});
formatter.result({
  "duration": 5240475618,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cdiv id\u003d\"__xmlview1--entlAttrtable-rowsel0\" data-sap-ui-rowindex\u003d\"0\" class\u003d\"sapUiTableRowHdr sapUiTableRowHidden\" tabindex\u003d\"-1\" aria-labelledby\u003d\"__xmlview1--entlAttrtable-ariarowheaderlabel\" role\u003d\"rowheader\" style\u003d\"height: 32.8px;\"\u003e...\u003c/div\u003e is not clickable at point (177, 147). Other element would receive the click: \u003cdiv class\u003d\"sapUiTableCtrlEmpty\" tabindex\u003d\"0\" id\u003d\"__xmlview1--entlAttrtable-noDataCnt\" role\u003d\"gridcell\" aria-labelledby\u003d\"__xmlview1--entlAttrtable-noDataMsg\" data-sap-ui-table-acc-covered\u003d\"overlay\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d60.0.3112.90)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 126 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027CTUN50886515A\u0027, ip: \u002710.130.231.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\I337530\\AppData\\Local\\Temp\\scoped_dir23992_18309}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.90, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d5c26dc4f1a7ed50472db81d0e89a439\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:273)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.hsx.CTest.StepsImp.check_ExpectedResult(StepsImp.java:80)\r\n\tat ✽.Then Check ExpectedResult \"Create successfully\"(search.feature:9)\r\n",
  "status": "failed"
});
});