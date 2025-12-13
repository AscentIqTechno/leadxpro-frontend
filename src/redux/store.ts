import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import modalReducer from "./slices/modelSlice"; // only default export
import authReducer from "./slices/authSlice";

import { authApi } from "./api/authApi";
import { smsApi } from "./api/smsApi";
import { smtpApi } from "./api/smtpApi";
import { campaignApi } from "./api/campaignApi";
import { emailDirectoryApi } from "./api/emailDirectoryApi";
import { smsCampaignApi } from "./api/sms_compaign.api";
import { numberDirectoryApi } from "./api/numberDirectoryApi";
import { paymentApi } from "./api/paymentApi";
import { planApi } from "./api/planApi";
import { dashboardApi } from "./api/dashboardApi";
import { razorpayApi } from "./api/razorpayApi";
import { profileApi } from "./api/profileApi";
import {contactApi} from"./api/contactApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [smtpApi.reducerPath]: smtpApi.reducer,
    [campaignApi.reducerPath]: campaignApi.reducer,
    [emailDirectoryApi.reducerPath]: emailDirectoryApi.reducer,
    [smsApi.reducerPath]: smsApi.reducer,
    [numberDirectoryApi.reducerPath]: numberDirectoryApi.reducer,
    [smsCampaignApi.reducerPath]: smsCampaignApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [planApi.reducerPath]: planApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [razorpayApi.reducerPath]: razorpayApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApi.middleware)
      .concat(smtpApi.middleware)
      .concat(campaignApi.middleware)
      .concat(emailDirectoryApi.middleware)
      .concat(smsApi.middleware)
      .concat(numberDirectoryApi.middleware)
      .concat(smsCampaignApi.middleware)
      .concat(paymentApi.middleware)
      .concat(planApi.middleware)
      .concat(dashboardApi.middleware)
      .concat(razorpayApi.middleware)
      .concat(profileApi.middleware)
      .concat(contactApi.middleware)
});
