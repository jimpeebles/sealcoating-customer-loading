function doGet(request) {
  return HtmlService.createTemplateFromFile("LoadEmUp")
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.NATIVE);
}

function getMenuListFromSheet() {
  var data = SpreadsheetApp.openById("SPREADSHEET_ID")
    .getSheetByName("CustomerList")
    .getDataRange()
    .getValues();
  var headers = 0; // number of header rows to skip at top
  var customerColumn = 0; // column # (0-based) containing tag

  var availableCustomers = [];
  for (var row = headers; row < data.length; row++) {
    availableCustomers.push(data[row][customerColumn]);
  }

  return availableCustomers;
}

function AddLoad(mDate, mCustomer, mProduct, mGallons, mWater, mSand, mMeter) {
  var ss = SpreadsheetApp.openById("SPREADSHEET_ID").getSheetByName(
    "NewLoadingProgram"
  );
  var timeStamp = new Date();
  ss.appendRow([
    timeStamp,
    mDate,
    mCustomer,
    mProduct,
    mGallons,
    mWater,
    mSand,
    mMeter
  ]);
  return "Customer Got Loaded!";
}
