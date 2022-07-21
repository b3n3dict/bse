import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  Name: String,
  CurrentMarketPrice: Number,
  MarketCap: Number,
  StockPE: Number,
  DividendYield: Number,
  ROCE: Number,
  ROEPreviousAnnum: Number,
  DebtToEquity: Number,
  EPS: Number,
  Reserves: Number,
  Debt: Number,
});

const CompanyModel = mongoose.model("companies", companySchema);

export default CompanyModel;
