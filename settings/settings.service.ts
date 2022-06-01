import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public hideParentScreen = false;
  public sideMenuActive = true;
  public isAudioSettings = false;
  public generic_popup = false;
  public infoPopupVisible = false;
  public popupTitle = "";
  public popupDesc = "";
  public popupScreen = "";
  public currentList = [];
  public breadCrumbTitle = "";
  settingsList = [
    {
      id: 1, sideMenu: "My Profile",
      list: [
        {
          id: "language", type: "Type2ArrowComponent", title: "Language", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "english", type: 'Type1CheckboxComponent', title: "English", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "chinese", type: 'Type1CheckboxComponent', title: "Mandarin", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "french", type: 'Type1CheckboxComponent', title: "Español", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] }]
        },
        {
          id: "displaymode", type: 'Type1CheckboxComponent', title: "Display Mode", hidden: false, infoIconVisible: true, infoDesc: "Select Auto or Manual Display Mode.",
          cbValues: [{ name: "Auto", state: true }, { name: "Manual", state: false }]
        },
        {
          id: "headlighton", type: 'Type3IncDecComponent', title: "Display Brightness Headlights On", hidden: true, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 5, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1 }]
        },
        {
          id: "headlighoff", type: "Type3IncDecComponent", title: "Display Brightness Headlights Off", hidden: true, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 5, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1 }]
        },
        {
          id: "settheme", type: "Type2ArrowComponent", title: "Set Theme", hidden: false, infoIconVisible: true, infoDesc: "Changes the background theme of the display.",
          cbValues: [{ id: "theme1", type: 'Type1CheckboxComponent', title: "Theme 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "theme2", type: 'Type1CheckboxComponent', title: "Theme 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "theme3", type: 'Type1CheckboxComponent', title: "Theme 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] }]
        },
        {
          id: "thememode", type: 'Type1CheckboxComponent', title: "Theme Mode", hidden: false, infoIconVisible: true, infoDesc: "Select to show Themes in Day or Night Mode. Auto changes the theme with the headlights.",
          cbValues: [{ name: "Light", state: true }, { name: "Dark", state: false }, { name: "Auto", state: false }]
        },
        {
          id: "welcomesound", type: 'Type1CheckboxComponent', title: "Welcome and Goodbye Sound", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "units1", type: 'Type1CheckboxComponent', title: "Units", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "US", state: false }, { name: "Metric", state: true }]
        },
        {
          id: "units2", type: 'Type1CheckboxComponent', title: "Units", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Imperial", state: false }, { name: "Metric", state: true }]
        },
        {
          id: "touchscreenbeep", type: 'Type1CheckboxComponent', title: "Touchscreen Beep", hidden: false, infoIconVisible: true, infoDesc: "Plays a sound when a screen button is pressed.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "warningcluster", type: 'Type1CheckboxComponent', title: "Warning Cluster Buzzer volume", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Low", state: true }, { name: "Mid", state: false }, { name: "High", state: false }]
        },
        {
          id: "systemtext", type: 'Type1CheckboxComponent', title: "System Text Size", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Standard", state: true }, { name: "Larger", state: false }]
        },
        {
          id: "showmaincategory", type: 'Type1CheckboxComponent', title: "Show Main Category Bar Labels", hidden: false, infoIconVisible: true, infoDesc: "Show labels for the Main Category Bar",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "autolaunch", type: 'Type1CheckboxComponent', title: "Auto Launch with Off Road+", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: true }, { name: "Forward Camera", state: false }, { name: "Off Road Pages", state: false }]
        },
        {
          id: "fuelsaver", type: 'Type1CheckboxComponent', title: "Fuel Saver Display in Cluster", hidden: false, infoIconVisible: true, infoDesc: "Displays fuel saver mode in the cluster (driver screen).",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "navigation", type: 'Type1CheckboxComponent', title: "Navigation Turn-by-Turn Displayed in Cluster", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "phone", type: 'Type1CheckboxComponent', title: "Phone pop-ups Displayed in Cluster", hidden: false, infoIconVisible: true, infoDesc: "Displays phone pop-ups in the cluster (driver screen).",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "clusteroptions", type: "Type2ArrowComponent", title: "Cluster Options", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "tripboncluster", type: 'Type1CheckboxComponent', title: "Trip B on Cluster", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "audiooncluster", type: 'Type1CheckboxComponent', title: "Audio info on Cluster", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "digiscs", type: 'Type1CheckboxComponent', title: "Digital speed on all Cluster screens", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "consbcs", type: 'Type1CheckboxComponent', title: "Consumption bar on Cluster screens", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          {
            id: "perfoncluster", type: "Type2ArrowComponent", title: "Performance Pages on cluster", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ id: "comfort", type: 'Type1CheckboxComponent', title: "Comfort", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Current Consumption", state: true }, { name: "Consumption History", state: false }] },
            { id: "maxrange", type: 'Type1CheckboxComponent', title: "Max Range", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Current Consumption", state: true }, { name: "Consumption History", state: false }] },
            { id: "gt", type: 'Type1CheckboxComponent', title: "GT", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Current Consumption", state: true }, { name: "Consumption History", state: false }] },
            { id: "sport", type: 'Type1CheckboxComponent', title: "Sport", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Sport Gauges", state: false }, { name: "CORSA", state: true }] },
            { id: "corsa", type: 'Type1CheckboxComponent', title: "CORSA", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "CORSA Gauges", state: false }, { name: "Sport Gauges", state: true }] },
            ]
          },
          {
            id: "customarea", type: "Type2ArrowComponent", title: "Custom Areas  on Cluster", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              {
                id: "area1", type: "Type2ArrowComponent", title: "Area 1(upper left)", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "a1_time", type: 'Type1CheckboxComponent', title: "time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "a1_date", type: 'Type1CheckboxComponent', title: "date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_temp", type: 'Type1CheckboxComponent', title: "ext temp.", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_rte", type: 'Type1CheckboxComponent', title: "RTE", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_compass", type: 'Type1CheckboxComponent', title: "compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_empty", type: 'Type1CheckboxComponent', title: "empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "area2", type: "Type2ArrowComponent", title: "Area 2(upper right)", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "a2_time", type: 'Type1CheckboxComponent', title: "time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "a2_date", type: 'Type1CheckboxComponent', title: "date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_temp", type: 'Type1CheckboxComponent', title: "ext temp.", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_rte", type: 'Type1CheckboxComponent', title: "RTE", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_compass", type: 'Type1CheckboxComponent', title: "compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_empty", type: 'Type1CheckboxComponent', title: "empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "area3", type: "Type2ArrowComponent", title: "Area 3(bottom right)", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "a3_time", type: 'Type1CheckboxComponent', title: "time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "a3_date", type: 'Type1CheckboxComponent', title: "date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_temp", type: 'Type1CheckboxComponent', title: "ext temp.", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_rte", type: 'Type1CheckboxComponent', title: "RTE", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_compass", type: 'Type1CheckboxComponent', title: "compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_empty", type: 'Type1CheckboxComponent', title: "empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },

            ]
          },
          {
            id: "widgetlist", type: "Type2ArrowComponent", title: "Widget List", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              { id: "W_CC", type: 'Type1CheckboxComponent', title: "Current Consumption", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
              { id: "W_MEDIA", type: 'Type1CheckboxComponent', title: "Media", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_COMP", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_GMETE", type: 'Type1CheckboxComponent', title: "G-Mete", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_PT", type: 'Type1CheckboxComponent', title: "Performance Temperatures", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TM", type: 'Type1CheckboxComponent', title: "Torque Management", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TP", type: 'Type1CheckboxComponent', title: "Tire Pressure", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TW", type: 'Type1CheckboxComponent', title: "Time and Weather", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_HI", type: 'Type1CheckboxComponent', title: "Hybrid Info", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            ]
          },
          {
            id: "customizablearea", type: "Type2ArrowComponent", title: "Customizable Areas", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              {
                id: "c_area1", type: "Type2ArrowComponent", title: "Area 1", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca1_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca1_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "c_area2", type: "Type2ArrowComponent", title: "Area 2", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca2_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca2_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "c_area3", type: "Type2ArrowComponent", title: "Area 3", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca3_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca3_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "c_area4", type: "Type2ArrowComponent", title: "Area 4", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca4_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca4_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
            ]
          },
          {
            id: "seccontent", type: "Type2ArrowComponent", title: "Cluster Secondary Content", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              { id: "SEC_SA", type: 'Type1CheckboxComponent', title: "Select All", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_AW", type: 'Type1CheckboxComponent', title: "ADAS Widget", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_NIP", type: 'Type1CheckboxComponent', title: "NIP", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_IT", type: 'Type1CheckboxComponent', title: "Instruction Text", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
              { id: "SEC_DB", type: 'Type1CheckboxComponent', title: "DNA Badge", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_AR", type: 'Type1CheckboxComponent', title: "Audio Repetition", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            ]
          },
          {
            id: "tipinclus", type: "Type1CheckboxComponent", title: "Tips in Cluster", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: false }]
          },
          ] 
        },
        {
          id: "hct", type: "Type2ArrowComponent", title: "Heritage Cluster Themes", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "hct_T1", type: 'Type1CheckboxComponent', title: "Theme 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "hct_T2", type: 'Type1CheckboxComponent', title: "Theme 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "hct_T3", type: 'Type1CheckboxComponent', title: "Theme 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "hct_T4", type: 'Type1CheckboxComponent', title: "Theme 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          ]
        },
        {
          id: "hres", type: "Type2ArrowComponent", title: "Heritage Reconfigurable Exhaust Sounds", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "HRES_OFF", type: 'Type1CheckboxComponent', title: "Off", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S1", type: 'Type1CheckboxComponent', title: "Sound 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S2", type: 'Type1CheckboxComponent', title: "Sound 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S3", type: 'Type1CheckboxComponent', title: "Sound 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S4", type: 'Type1CheckboxComponent', title: "Sound 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
            { id: "HRES_LCT", type: 'Type1CheckboxComponent', title: "Linked to Cluster Theme", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          ]
        },
        {
          id: "HUD", type: "Type2ArrowComponent", title: "Head Up Display", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "HUD_1", type: 'Type1CheckboxComponent', title: "Head Up Display", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            {
              id: "HUD_B", type: 'Type3IncDecComponent', title: "HUD Brightness", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 1, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
            {
              id: "HUD_H", type: 'Type3IncDecComponent', title: "HUD Height", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 1, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
            {
              id: "HUD_C", type: 'Type2ArrowComponent', title: "HUD Content", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [
                { id: "HUD_Si", type: 'Type1CheckboxComponent', title: "Simple", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                { id: "HUD_St", type: 'Type1CheckboxComponent', title: "Standard", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                { id: "HUD_A", type: 'Type1CheckboxComponent', title: "Advanced", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                { id: "HUD_Cus", type: 'Type1CheckboxComponent', title: "Custom", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
              ]
            },
          ]
        }
      ]
    },
    {
      id: 2, sideMenu: "Display",
      list: [
        {
          id: "language", type: "Type2ArrowComponent", title: "Language", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "english", type: 'Type1CheckboxComponent', title: "English", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "chinese", type: 'Type1CheckboxComponent', title: "Mandarin", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "french", type: 'Type1CheckboxComponent', title: "Español", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] }]
        },
        {
          id: "displaymode1", type: 'Type1CheckboxComponent', title: "Display Mode", hidden: false, infoIconVisible: true, infoDesc: "Select Auto or Manual Display Mode.",
          cbValues: [{ name: "Auto", state: true }, { name: "Manual", state: false }]
        },
        {
          id: "headlighton1", type: 'Type3IncDecComponent', title: "Display Brightness Headlights On", hidden: true, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 5, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1 }]
        },
        {
          id: "headlighoff1", type: "Type3IncDecComponent", title: "Display Brightness Headlights Off", hidden: true, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 5, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1 }]
        },
        {
          id: "settheme", type: "Type2ArrowComponent", title: "Set Theme", hidden: false, infoIconVisible: true, infoDesc: "Changes the background theme of the display.",
          cbValues: [{ id: "theme1", type: 'Type1CheckboxComponent', title: "Theme 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "theme2", type: 'Type1CheckboxComponent', title: "Theme 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "theme3", type: 'Type1CheckboxComponent', title: "Theme 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] }]
        },
        {
          id: "thememode", type: 'Type1CheckboxComponent', title: "Theme Mode", hidden: false, infoIconVisible: true, infoDesc: "Select to show Themes in Day or Night Mode. Auto changes the theme with the headlights.",
          cbValues: [{ name: "Light", state: true }, { name: "Dark", state: false }, { name: "Auto", state: false }]
        },
        {
          id: "welcomesound", type: 'Type1CheckboxComponent', title: "Welcome and Goodbye Sound", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "units1", type: 'Type1CheckboxComponent', title: "Units", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "US", state: false }, { name: "Metric", state: true }]
        },
        {
          id: "units2", type: 'Type1CheckboxComponent', title: "Units", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Imperial", state: false }, { name: "Metric", state: true }]
        },
        {
          id: "touchscreenbeep", type: 'Type1CheckboxComponent', title: "Touchscreen Beep", hidden: false, infoIconVisible: true, infoDesc: "Plays a sound when a screen button is pressed.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "warningcluster", type: 'Type1CheckboxComponent', title: "Warning Cluster Buzzer volume", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Low", state: true }, { name: "Mid", state: false }, { name: "High", state: false }]
        },
        {
          id: "systemtext", type: 'Type1CheckboxComponent', title: "System Text Size", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Standard", state: true }, { name: "Larger", state: false }]
        },
        {
          id: "showmaincategory", type: 'Type1CheckboxComponent', title: "Show Main Category Bar Labels", hidden: false, infoIconVisible: true, infoDesc: "Show labels for the Main Category Bar",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "autolaunch", type: 'Type1CheckboxComponent', title: "Auto Launch with Off Road+", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: true }, { name: "Forward Camera", state: false }, { name: "Off Road Pages", state: false }]
        },
        {
          id: "fuelsaver", type: 'Type1CheckboxComponent', title: "Fuel Saver Display in Cluster", hidden: false, infoIconVisible: true, infoDesc: "Displays fuel saver mode in the cluster (driver screen).",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "navigation", type: 'Type1CheckboxComponent', title: "Navigation Turn-by-Turn Displayed in Cluster", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "phone", type: 'Type1CheckboxComponent', title: "Phone pop-ups Displayed in Cluster", hidden: false, infoIconVisible: true, infoDesc: "Displays phone pop-ups in the cluster (driver screen).",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "clusteroptions", type: "Type2ArrowComponent", title: "Cluster Options", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "tripboncluster", type: 'Type1CheckboxComponent', title: "Trip B on Cluster", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "audiooncluster", type: 'Type1CheckboxComponent', title: "Audio info on Cluster", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "digiscs", type: 'Type1CheckboxComponent', title: "Digital speed on all Cluster screens", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "consbcs", type: 'Type1CheckboxComponent', title: "Consumption bar on Cluster screens", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          {
            id: "perfoncluster", type: "Type2ArrowComponent", title: "Performance Pages on cluster", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ id: "comfort", type: 'Type1CheckboxComponent', title: "Comfort", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Current Consumption", state: true }, { name: "Consumption History", state: false }] },
            { id: "maxrange", type: 'Type1CheckboxComponent', title: "Max Range", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Current Consumption", state: true }, { name: "Consumption History", state: false }] },
            { id: "gt", type: 'Type1CheckboxComponent', title: "GT", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Current Consumption", state: true }, { name: "Consumption History", state: false }] },
            { id: "sport", type: 'Type1CheckboxComponent', title: "Sport", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Sport Gauges", state: false }, { name: "CORSA", state: true }] },
            { id: "corsa", type: 'Type1CheckboxComponent', title: "CORSA", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "CORSA Gauges", state: false }, { name: "Sport Gauges", state: true }] },
            ]
          },
          {
            id: "customarea", type: "Type2ArrowComponent", title: "Custom Areas  on Cluster", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              {
                id: "area1", type: "Type2ArrowComponent", title: "Area 1(upper left)", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "a1_time", type: 'Type1CheckboxComponent', title: "time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "a1_date", type: 'Type1CheckboxComponent', title: "date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_temp", type: 'Type1CheckboxComponent', title: "ext temp.", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_rte", type: 'Type1CheckboxComponent', title: "RTE", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_compass", type: 'Type1CheckboxComponent', title: "compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a1_empty", type: 'Type1CheckboxComponent', title: "empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "area2", type: "Type2ArrowComponent", title: "Area 2(upper right)", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "a2_time", type: 'Type1CheckboxComponent', title: "time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "a2_date", type: 'Type1CheckboxComponent', title: "date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_temp", type: 'Type1CheckboxComponent', title: "ext temp.", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_rte", type: 'Type1CheckboxComponent', title: "RTE", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_compass", type: 'Type1CheckboxComponent', title: "compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a2_empty", type: 'Type1CheckboxComponent', title: "empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "area3", type: "Type2ArrowComponent", title: "Area 3(bottom right)", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "a3_time", type: 'Type1CheckboxComponent', title: "time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "a3_date", type: 'Type1CheckboxComponent', title: "date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_temp", type: 'Type1CheckboxComponent', title: "ext temp.", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_rte", type: 'Type1CheckboxComponent', title: "RTE", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_compass", type: 'Type1CheckboxComponent', title: "compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "a3_empty", type: 'Type1CheckboxComponent', title: "empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },

            ]
          },
          {
            id: "widgetlist", type: "Type2ArrowComponent", title: "Widget List", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              { id: "W_CC", type: 'Type1CheckboxComponent', title: "Current Consumption", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
              { id: "W_MEDIA", type: 'Type1CheckboxComponent', title: "Media", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_COMP", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_GMETE", type: 'Type1CheckboxComponent', title: "G-Mete", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_PT", type: 'Type1CheckboxComponent', title: "Performance Temperatures", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TM", type: 'Type1CheckboxComponent', title: "Torque Management", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TP", type: 'Type1CheckboxComponent', title: "Tire Pressure", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_TW", type: 'Type1CheckboxComponent', title: "Time and Weather", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "W_HI", type: 'Type1CheckboxComponent', title: "Hybrid Info", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            ]
          },
          {
            id: "customizablearea", type: "Type2ArrowComponent", title: "Customizable Areas", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              {
                id: "c_area1", type: "Type2ArrowComponent", title: "Area 1", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca1_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca1_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca1_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "c_area2", type: "Type2ArrowComponent", title: "Area 2", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca2_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca2_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca2_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "c_area3", type: "Type2ArrowComponent", title: "Area 3", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca3_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca3_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca3_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
              {
                id: "c_area4", type: "Type2ArrowComponent", title: "Area 4", hidden: false, infoIconVisible: false, infoDesc: "",
                cbValues: [
                  { id: "ca4_time", type: 'Type1CheckboxComponent', title: "Time", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_date", type: 'Type1CheckboxComponent', title: "Date", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_temp", type: 'Type1CheckboxComponent', title: "External Temperature", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_compass", type: 'Type1CheckboxComponent', title: "Compass", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                  { id: "ca4_rte", type: 'Type1CheckboxComponent', title: "Range to Empty", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_afe", type: 'Type1CheckboxComponent', title: "Average Fuel Economy", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_tripA", type: 'Type1CheckboxComponent', title: "Trip A", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_tripB", type: 'Type1CheckboxComponent', title: "Trip B", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                  { id: "ca4_empty", type: 'Type1CheckboxComponent', title: "Blank", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                ]
              },
            ]
          },
          {
            id: "seccontent", type: "Type2ArrowComponent", title: "Cluster Secondary Content", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [
              { id: "SEC_SA", type: 'Type1CheckboxComponent', title: "Select All", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_AW", type: 'Type1CheckboxComponent', title: "ADAS Widget", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_NIP", type: 'Type1CheckboxComponent', title: "NIP", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_IT", type: 'Type1CheckboxComponent', title: "Instruction Text", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
              { id: "SEC_DB", type: 'Type1CheckboxComponent', title: "DNA Badge", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              { id: "SEC_AR", type: 'Type1CheckboxComponent', title: "Audio Repetition", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            ]
          },
          {
            id: "tipinclus", type: "Type1CheckboxComponent", title: "Tips in Cluster", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: false }]
          },
          ]
        },
        {
          id: "hct", type: "Type2ArrowComponent", title: "Heritage Cluster Themes", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "hct_T1", type: 'Type1CheckboxComponent', title: "Theme 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "hct_T2", type: 'Type1CheckboxComponent', title: "Theme 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "hct_T3", type: 'Type1CheckboxComponent', title: "Theme 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "hct_T4", type: 'Type1CheckboxComponent', title: "Theme 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          ]
        },
        {
          id: "hres", type: "Type2ArrowComponent", title: "Heritage Reconfigurable Exhaust Sounds", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "HRES_OFF", type: 'Type1CheckboxComponent', title: "Off", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S1", type: 'Type1CheckboxComponent', title: "Sound 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S2", type: 'Type1CheckboxComponent', title: "Sound 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S3", type: 'Type1CheckboxComponent', title: "Sound 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "HRES_S4", type: 'Type1CheckboxComponent', title: "Sound 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
            { id: "HRES_LCT", type: 'Type1CheckboxComponent', title: "Linked to Cluster Theme", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          ]
        },
        {
          id: "HUD", type: "Type2ArrowComponent", title: "Head Up Display", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "HUD_1", type: 'Type1CheckboxComponent', title: "Head Up Display", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            {
              id: "HUD_B", type: 'Type3IncDecComponent', title: "HUD Brightness", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 1, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
            {
              id: "HUD_H", type: 'Type3IncDecComponent', title: "HUD Height", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 1, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
            {
              id: "HUD_C", type: 'Type2ArrowComponent', title: "HUD Content", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [
                { id: "HUD_Si", type: 'Type1CheckboxComponent', title: "Simple", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
                { id: "HUD_St", type: 'Type1CheckboxComponent', title: "Standard", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                { id: "HUD_A", type: 'Type1CheckboxComponent', title: "Advanced", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
                { id: "HUD_Cus", type: 'Type1CheckboxComponent', title: "Custom", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
              ]
            },
          ]
        }
      ]
    },
    {
      id: 3, sideMenu: "Units",
      list: [
        {
          id: "units_speed", type: 'Type1CheckboxComponent', title: "Speed", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "MPH", state: true }, { name: "Km/h", state: false }]
        },
        {
          id: "units_dist", type: 'Type1CheckboxComponent', title: "Distance", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "mi", state: true }, { name: "km", state: false }]
        },
        {
          id: "units_fuel", type: 'Type1CheckboxComponent', title: "Fuel Consumption", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "MPG", state: true }, { name: "L/100 km", state: false }, { name: "km/L", state: false }]
        },
        {
          id: "units-pressure", type: 'Type1CheckboxComponent', title: "Pressure", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "psi", state: true }, { name: "kPa", state: false }, { name: "bar", state: false }]
        },
        {
          id: "units-temp", type: 'Type1CheckboxComponent', title: "Temperature", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "°C", state: true }, { name: "°F", state: false }]
        },
        {
          id: "units-power", type: 'Type1CheckboxComponent', title: "Power", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "HP(US)", state: true }, { name: "HP(UK)", state: false }, { name: "KW", state: false }]
        },
        {
          id: "units-tarque", type: 'Type1CheckboxComponent', title: "Torque", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "lb-ft", state: true }, { name: "Nm", state: false }]
        }
      ]
    },
    {
      id: 4, sideMenu: "Entertainment Screens",
      list: [
        {
          id: "ES_PSP", type: 'Type2ArrowComponent', title: "Passenger Screen Permissions", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "ES_NAV", type: 'Type1CheckboxComponent', title: "Navigation", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          {
            id: "ES-DM", type: 'Type1CheckboxComponent', title: "Device Manager", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: true }]
          },
          {
            id: "ES-UcT", type: 'Type1CheckboxComponent', title: "UConnect Theater", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: true }]
          },
          {
            id: "ES_SZ", type: 'Type1CheckboxComponent', title: "Sound Zones", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: true }]
          },
          ]
        },

        {
          id: "ES_RSP", type: 'Type2ArrowComponent', title: "Rear Seat Screen Permissions", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{
            id: "ES_RSP_NAV", type: 'Type1CheckboxComponent', title: "Navigation", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: true }]
          },
          {
            id: "ES_RSP_SZ", type: 'Type1CheckboxComponent', title: "Sound Zones", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ name: "", state: true }]
          },
          ]
        },

      ]
    },
    {
      id: 5, sideMenu: "Safety &Driving Assistance",
      list: [
        {
          id: "SDA_FAEB", type: 'Type2ArrowComponent', title: "Front Automatic Emergency Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_FCW", type: 'Type1CheckboxComponent', title: "Forward Collision Warning", hidden: false, infoIconVisible: true, infoDesc: "Provides a warning in case of potential forward collision, or applies brakes and a warning",
              cbValues: [{ name: "Off", state: true }, { name: "Only Warning", state: false }, { name: "Warning+ Active Braking", state: false }]
            },
            {
              id: "SDA_FCW1", type: 'Type1CheckboxComponent', title: "Forward Collision Warning", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: true }]
            },
            {
              id: "SDA_FCWAB", type: 'Type1CheckboxComponent', title: "Forward Collision Warning Active Braking", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_FCS", type: 'Type1CheckboxComponent', title: "Forward Collision Sensitivity", hidden: false, infoIconVisible: true, infoDesc: "Sets the distance in which a Forward Collision Warning will occur.",
              cbValues: [{ name: "Near", state: false }, { name: "Far", state: false }]
            },
            {
              id: "SDA_FCSw", type: 'Type1CheckboxComponent', title: "Forward Collision Sensitivity", hidden: false, infoIconVisible: true, infoDesc: "Sets the distance in which a Forward Collision Warning will occur.",
              cbValues: [{ name: "Near", state: false }, { name: "Med", state: false }, { name: "Far", state: false }]
            },
            {
              id: "SDA_ESA", type: 'Type1CheckboxComponent', title: "Evasive Steering Assist", hidden: false, infoIconVisible: true, infoDesc: "This feature is only available when Forward Collision Warning is turned ON.",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_PEB", type: 'Type1CheckboxComponent', title: "Pedestrian Emergency Braking", hidden: false, infoIconVisible: true, infoDesc: "Provides a warning and applies brakes when a potential pedestrian collision is detected at slower vehicle speeds.",
              cbValues: [{ name: "Off", state: true }, { name: "Warning + Active Braking", state: false }]
            },
          ]
        },
        {
          id: "SDA_FC", type: 'Type1CheckboxComponent', title: "Forward Collision Warning / Pedestrian Emergency Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RA", type: 'Type1CheckboxComponent', title: "Rear Automatic Emergency Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RC", type: 'Type1CheckboxComponent', title: "Rear Cross Path Alert", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RSA", type: 'Type1CheckboxComponent', title: "Rear Seat Alert", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RSA1", type: 'Type1CheckboxComponent', title: "Rear Seat Alert", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: true },{ name: "Cluster Warning", state: false }]
        },
        {
          id: "SDA_RSAHorn", type: 'Type1CheckboxComponent', title: "Rear Seat Alert Horn", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RSAH", type: 'Type1CheckboxComponent', title: "Rear Seat Alert Hazard", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RSAPA", type: 'Type1CheckboxComponent', title: "Rear Seat Alert Phone Alert", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_HP", type: 'Type2ArrowComponent', title: "Highway Pilot", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_LCO", type: 'Type1CheckboxComponent', title: "Lane Change Options", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Automatic or Driver Request", state: true }, { name: "Driver Request Only", state: false }]
            },
            {
              id: "SDA_SO", type: 'Type3IncDecComponent', title: "Speed Offset", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 5, minVal: 1, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
          ]
        },
        {
          id: "SDA_HA", type: 'Type2ArrowComponent', title: "Highway Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_SWV", type: 'Type1CheckboxComponent', title: "Steering Wheel Vibration", hidden: false, infoIconVisible: true, infoDesc: "Vibrates the steering wheel when lane departure is detected.",
              cbValues: [{ name: "", state: true }]
            },
          ]
        },
        {
          id: "SDA_HATJA", type: 'Type2ArrowComponent', title: "Highway Assist / Traffic Jam Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_SWV1", type: 'Type1CheckboxComponent', title: "Steering Wheel Vibration", hidden: false, infoIconVisible: true, infoDesc: "Vibrates the steering wheel when lane departure is detected.",
              cbValues: [{ name: "", state: true }]
            },
          ]
        },
        {
          id: "SDA_TSA", type: 'Type1CheckboxComponent', title: "Traffic Sign Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_TSAW", type: 'Type1CheckboxComponent', title: "Traffic Sign Assist Warning", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: true }, { name: "Visual", state: false }, { name: "Visual+ Chime", state: false }]
        },
        {
          id: "SDA_TSAO", type: "Type3IncDecComponent", title: "Traffic Sign Assist Offset", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 5, minVal: 0, maxVal: 16, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
        },
        {
          id: "SDA_TS", type: 'Type2ArrowComponent', title: "Traffic Sign", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_TSB", type: 'Type1CheckboxComponent', title: "Traffic Sign Blinking", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: true }]
            },
            {
              id: "SDA_TSS", type: 'Type1CheckboxComponent', title: "Traffic Sign Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "+0", state: true }, { name: "+5", state: false }, { name: "+10", state: false }]
            },
            {
              id: "SDA_TSIO", type: "Type3IncDecComponent", title: "Traffic Sign Information Offset", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 5, minVal: 0, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
          ]
        },
        {
          id: "SDA_UACC", type: 'Type2ArrowComponent', title: "Urban Adaptive Cruise Control", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_OFF", type: 'Type1CheckboxComponent', title: "Off", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: true }]
            },
            {
              id: "SDA_VO", type: 'Type1CheckboxComponent', title: "Visual Only", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_VC", type: 'Type1CheckboxComponent', title: "Visual + Chime", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_VCT", type: 'Type1CheckboxComponent', title: "Visual +  Chime + Tactile", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
          ]
        },
        {
          id: "SDA_ISO", type: 'Type1CheckboxComponent', title: "Intelligent Speed Options", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Manual Confirm", state: true }, { name: "Auto Confirm", state: false }]
        },
        {
          id: "SDA_ISC", type: 'Type2ArrowComponent', title: "Intelligent Speed Control", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_ISC1", type: 'Type1CheckboxComponent', title: "Intelligent Speed Control", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: true }]
            },
            {
              id: "SDA_ISCO", type: 'Type3IncDecComponent', title: "Intelligent Speed Control Offset", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 5, minVal: 0, maxVal: 10, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
            },
          ]
        },
        {
          id: "SDA_SL", type: 'Type1CheckboxComponent', title: "Speed Limiter", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_SLSS", type: "Type3IncDecComponent", title: "Speed Limiter - Set Speed", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 45, minVal: 30, maxVal: 180, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
        },
        {
          id: "SDA_NSZI", type: 'Type1CheckboxComponent', title: "New Speed Zone Indication", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: true }, { name: "Visual", state: false }, { name: "Visual+Chime", state: false }]
        },
        {
          id: "SDA_IRC", type: 'Type1CheckboxComponent', title: "Intelligent Ride Control", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_Lane", type: 'Type2ArrowComponent', title: "LaneSense", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_LW", type: 'Type1CheckboxComponent', title: "LaneSense Warning", hidden: false, infoIconVisible: true, infoDesc: "Sets which distance the steering wheel will provide feedback for potential lane departures.",
              cbValues: [{ name: "Early", state: false }, { name: "Med", state: true }, { name: "Late", state: false }]
            },
            {
              id: "SDA_LW1", type: 'Type1CheckboxComponent', title: "LaneSense Warning", hidden: false, infoIconVisible: true, infoDesc: "Sets which distance the steering wheel will provide feedback for potential lane departures.",
              cbValues: [{ name: "Early", state: false }, { name: "Late", state: false }]
            },
            {
              id: "SDA_LS", type: 'Type1CheckboxComponent', title: "LaneSense Strength", hidden: false, infoIconVisible: true, infoDesc: "Sets the strength of the steering wheel feedback for potential lane departures.",
              cbValues: [{ name: "High", state: false }, { name: "Med", state: true }, { name: "Low", state: false }]
            },
            {
              id: "SDA_LS1", type: 'Type1CheckboxComponent', title: "LaneSense Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "High", state: false }, { name: "Low", state: false }]
            },
          ]
        },

        {
          id: "SDA_LDWS", type: 'Type1CheckboxComponent', title: "Lane Departure Warning Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Early", state: true }, { name: "Late", state: false }]
        },
        {
          id: "SDA_LKA", type: 'Type2ArrowComponent', title: "Lane Keeping Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_LKA1", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_LKAWM", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist Warning Mode", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Visual", state: true }, { name: "Visual+ Haptic", state: false }]
            },
            {
              id: "SDA_LKAS", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Early", state: false }, { name: "Medium", state: true }, { name: "Late", state: false }]
            },
            {
              id: "SDA_LKAS1", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Early", state: false }, { name: "Late", state: false }]
            },
            {
              id: "SDA_LKSS", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "High", state: false }, { name: "Medium", state: true }, { name: "Low", state: false }]
            },
            {
              id: "SDA_LKSS1", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "High", state: false }, { name: "Low", state: false }]
            },
          ]
        },
        {
          id: "SDA_LKA1", type: 'Type2ArrowComponent', title: "Lane Keeping Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_LKA11", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_LKAM", type: 'Type1CheckboxComponent', title: "Lane Keeping Assist Mode", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Warning Only", state: true }, { name: "Warning and Keeping", state: false }]
            },
            {
              id: "SDA_LKAWT", type: 'Type1CheckboxComponent', title: "Lane Keeping Assisnt Warning Type", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Visual + Acoustic", state: false }, { name: "Visual + Vibration", state: true }, { name: "Visual + Acoustic + Vibration", state: false }]
            },
          ]
        },
        {
          id: "SDA_LCAS", type: 'Type1CheckboxComponent', title: "Lane Change Assist Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Early", state: true }, { name: "Late", state: false }]
        },
        {
          id: "SDA_NVVW", type: 'Type1CheckboxComponent', title: "Night Vision Video Warnings", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_PARKSENSE", type: 'Type1CheckboxComponent', title: "ParkSense", hidden: false, infoIconVisible: true, infoDesc: "Provides alerts (sound or sound & braking) to indicate proximity to other objects.",
          cbValues: [{ name: "Only Warning", state: true }, { name: "Warning + Brake Assist", state: false }]
        },
        {
          id: "SDA_RPBA", type: 'Type1CheckboxComponent', title: "Rear ParkSense Braking Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_PA", type: 'Type1CheckboxComponent', title: "Park Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_PSF", type: 'Type1CheckboxComponent', title: "Park Assist Front Sensors Active in Drive", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_PS", type: 'Type2ArrowComponent', title: "ParkSense", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_PS1", type: 'Type1CheckboxComponent', title: "ParkSense", hidden: false, infoIconVisible: true, infoDesc: "By selecting 'Off', sensors will not be activated in any condition.",
              cbValues: [{ name: "", state: true }]
            },
            {
              id: "SDA_PSM", type: 'Type1CheckboxComponent', title: "ParkSense Mode", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Sound", state: true }, { name: "Sound+ Display", state: false }]
            },
            {
              id: "SDA_PSFSAD", type: 'Type1CheckboxComponent', title: "ParkSense Front sensors active in drive", hidden: false, infoIconVisible: true, infoDesc: "By selecting 'Off', sensors will be activated only when inserting the Reverse gear.",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_PSV", type: 'Type1CheckboxComponent', title: "ParkSense Volume", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "High", state: false }]
            },
          ]
        },
        {
          id: "SDA_FPV", type: 'Type1CheckboxComponent', title: "Front ParkSense Volume", hidden: false, infoIconVisible: true, infoDesc: "Adjusts volume of front ParkSense alert.",
          cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "High", state: false }]
        },
        {
          id: "SDA_RPV", type: 'Type1CheckboxComponent', title: "Rear ParkSense Volume", hidden: false, infoIconVisible: true, infoDesc: "Adjusts volume of rear ParkSense alert.",
          cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "High", state: false }]
        },
        {
          id: "SDA_PSFCA", type: 'Type1CheckboxComponent', title: "ParkSense Front Camera Activation", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_APM", type: 'Type1CheckboxComponent', title: "Active ParkSense Mode ", hidden: false, infoIconVisible: true, infoDesc: "Controls Active ParkSense functionality between fully autonomous and semi-autonomous Active ParksSense.",
          cbValues: [{ name: "Full Auto", state: true }, { name: "Steering Only", state: false }]
        },
        {
          id: "SDA_APPC", type: 'Type1CheckboxComponent', title: "Active ParkSense Proximity Chimes", hidden: false, infoIconVisible: true, infoDesc: "Proximity Chime is only associated with the Full Auto option in Active ParkSense.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_SDW", type: 'Type1CheckboxComponent', title: "Side Distance Warning ", hidden: false, infoIconVisible: true, infoDesc: "Provides a warning to avoid potential collision with objects while driving at low speed.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_SDWV", type: 'Type1CheckboxComponent', title: "Side Distance Warning Volume", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "High", state: false }]
        },
        {
          id: "SDA_DDA", type: 'Type1CheckboxComponent', title: "Drowsy Driver Alert", hidden: false, infoIconVisible: true, infoDesc: "Monitors driving behavior and provides alerts when driving behavior suggests driver may be drowsy.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_DAAS", type: 'Type1CheckboxComponent', title: "Driver Attention Assist Sensitivity ", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Standard", state: true }, { name: "High", state: false }]
        },
        {
          id: "SDA_BSA", type: 'Type1CheckboxComponent', title: "Blind Spot Alert", hidden: false, infoIconVisible: true, infoDesc: "Provides alerts (light or light & chime) to indicate objects in your blind spot.",
          cbValues: [{ name: "Off", state: true }, { name: "Lights", state: false }, { name: "Lights + Chime", state: false }]
        },
        {
          id: "SDA_ABSA1", type: 'Type2ArrowComponent', title: "Active Blind Spot Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_ABSA2", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_ABSAWM", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Warn Mod", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Visual", state: false }, { name: "Visual + Acoustic", state: false }, { name: "Visual + Haptic", state: true }]
            },
            {
              id: "SDA_ABSPAS1", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Early", state: false }, { name: "Medium", state: false }, { name: "Late", state: true }]
            },
            {
              id: "SDA_ABSAS2", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Low", state: false }, { name: "Medium", state: false }, { name: "High", state: true }]
            },
          ]
        },
        {
          id: "SDA_ABS3", type: 'Type2ArrowComponent', title: "Active Blind Spot Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_ABSA4", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "SDA_ABSAM", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Mode", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Warning Only", state: true }, { name: "Warning and Keeping", state: false }]
            },
            {
              id: "SDA_ABSAWT", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Warn Type", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Visual + Acoustic", state: false }, { name: "Visual + Vibration", state: true }, { name: "Visual", state: false }]
            },
            {
              id: "SDA_ABSPAS", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Sensitivity", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Early", state: false }, { name: "Late", state: true }]
            },
            {
              id: "SDA_ABSAS1", type: 'Type1CheckboxComponent', title: "Active Blind Spot Assist Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Low", state: false }, { name: "High", state: true }]
            },
          ]
        },
        {
          id: "SDA_IESC", type: 'Type1CheckboxComponent', title: "Intelligent Electronic Stability Control", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_ALM", type: 'Type2ArrowComponent', title: "Active Lane Management", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_LM", type: 'Type1CheckboxComponent', title: "Lane Management", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Vibration Only", state: false }, { name: "Steering Assist Only", state: false }, { name: "Vibration + Steering Assist", state: true }]
            },
            {
              id: "SDA_LW", type: 'Type1CheckboxComponent', title: "Lane Warning", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Early", state: false }, { name: "Medium", state: false }, { name: "Late", state: true }]
            },
            {
              id: "SDA_VS", type: 'Type1CheckboxComponent', title: "Vibration Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Low", state: false }, { name: "Medium", state: false }, { name: "High", state: true }]
            },
            {
              id: "SDA_SAS", type: 'Type1CheckboxComponent', title: "Steering Assist Strength", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Low", state: false }, { name: "Medium", state: false }, { name: "High", state: true }]
            },
          ]
        },
        {
          id: "SDA_TLBSA", type: 'Type1CheckboxComponent', title: "Trailer Length for Blind Spot Alert", hidden: false, infoIconVisible: true, infoDesc: "Auto detects length of trailer. Max sets all trailers to (39.5 ft)",
          cbValues: [{ name: "Auto", state: true }, { name: "Max(39.5ft)", state: false }]
        },
        {
          id: "SDA_PAIRBAG", type: 'Type2ArrowComponent', title: "Passenger airbag", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
        {
          id: "SDA_DCP", type: 'Type1CheckboxComponent', title: "Door Contact Prevention", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_DCBE", type: 'Type1CheckboxComponent', title: "Door Contact Brake Effort", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Low", state: true }, { name: "High", state: false }]
        },
        {
          id: "SDA_PCB", type: 'Type1CheckboxComponent', title: "Post Collision Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_EPSD", type: 'Type1CheckboxComponent', title: "Electric Power Steering Default ", hidden: false, infoIconVisible: true, infoDesc: "Changes standard power steering mode. Choose from Comfort (low effort) to Sport (most effort).",
          cbValues: [{ name: "Normal", state: false }, { name: "Sport", state: false }, { name: "Comfort", state: false }]
        },
        {
          id: "SDA_PSHIFT", type: 'Type1CheckboxComponent', title: "Paddle Shifters", hidden: false, infoIconVisible: true, infoDesc: "Disables or enables the use of steering wheel paddle switches for shifting in manual mode. ",
          cbValues: [{ name: "Enable", state: false }, { name: "Disable", state: false }]
        },
        {
          id: "SDA_PSS", type: 'Type1CheckboxComponent', title: "Power Side Step", hidden: false, infoIconVisible: true, infoDesc: "With Auto, steps will deploy when door is open and steps will retract when door is closed. With Store, steps will remain retracted with door open or closed.",
          cbValues: [{ name: "Auto", state: false }, { name: "Store", state: false }]
        },
        {
          id: "SDA_HSA", type: 'Type1CheckboxComponent', title: "Hill Start Assist", hidden: false, infoIconVisible: true, infoDesc: "Provides start assistance when the vehicle is on an incline.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_TFA", type: 'Type1CheckboxComponent', title: "Tire Fill Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_PRSBR", type: 'Type1CheckboxComponent', title: "Permanently Restore Seat Belt Reminder", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_KEY", type: 'Type2ArrowComponent', title: "KeySense", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
      ]
    },
    {
      id: 6, sideMenu: "Hybrid Electric",
      list: [
        {
          id: "HE_RTDP", type: 'Type1CheckboxComponent', title: "Ready To Drive Pop-Up", hidden: false, infoIconVisible: true, infoDesc: "Displays pop-up in cluster (driver screen) when ignition is in Run/Start at the beginning of each key cycle.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "HE_EV", type: "Type2ArrowComponent", title: "EV Sound", hidden: false, infoIconVisible: true, infoDesc: "Activates the electric motor sound.",
          cbValues: [{ id: "EV_IES", type: 'Type1CheckboxComponent', title: "Internal and External Sound", infoIconVisible: true, infoDesc: "Activates internal motor sound.", cbValues: [{ name: "", state: true }] },
          { id: "EV_ESV", type: 'Type1CheckboxComponent', title: "External Sound Volume", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "Linked to drive Mode", state: false }] },
          { id: "EV_ISV", type: 'Type1CheckboxComponent', title: "Internal Sound Volume", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "Linked to drive Mode", state: false }] },
          { id: "EV_ISWIC", type: 'Type1CheckboxComponent', title: "Internal Sound with Incoming Call", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Off", state: true }, { name: "Faded", state: false }] },
          {
            id: "HE_IEST", type: "Type2ArrowComponent", title: "Internal and External Sound Type", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ id: "EV_S1", type: 'Type1CheckboxComponent', title: "Sound 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
            { id: "EV_S2", type: 'Type1CheckboxComponent', title: "Sound 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "EV_S3", type: 'Type1CheckboxComponent', title: "Sound 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "EV_S4", type: 'Type1CheckboxComponent', title: "Sound 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            ]
          },
          ]
        },
        {
          id: "HE_KOKOA", type: "Type2ArrowComponent", title: "Key On / Key Off Alert", hidden: false, infoIconVisible: true, infoDesc: "Plays an alert when the vehicle is turned on or off.",
          cbValues: [{ id: "HE_OFF", type: 'Type1CheckboxComponent', title: "Off", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "HE_P1", type: 'Type1CheckboxComponent', title: "Pair 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "HE_P2", type: 'Type1CheckboxComponent', title: "Pair 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "HE_P3", type: 'Type1CheckboxComponent', title: "Pair 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "HE_P4", type: 'Type1CheckboxComponent', title: "Pair 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "HE_P5", type: 'Type1CheckboxComponent', title: "Pair 5", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },

          ]
        },
        {
          id: "HE_SR", type: 'Type1CheckboxComponent', title: "Smart Regeneration", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
      ]
    },
    {
      id: 7, sideMenu: "Clock",
      list: [
        {
          id: "clock_SGPS", type: 'Type1CheckboxComponent', title: "Sync Time with GPS", hidden: false, infoIconVisible: true, infoDesc: "Syncing time with GPS allows time to be set automatically. Select 'Off' to manually set time.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "clock_STH", type: 'Type3IncDecComponent', title: "Set Time Hours", hidden: true, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 10, minVal: 0, maxVal: 23, isCyclic: true, offsetVal: 1, valArr: [], stringState: false }]
        },
        {
          id: "clock_STM", type: 'Type3IncDecComponent', title: "Set Time Minutes", hidden: true, infoIconVisible: false, infoDesc: "",
          cbValues: [{ defaultVal: 30, minVal: 0, maxVal: 59, isCyclic: true, offsetVal: 1, valArr: [], stringState: false }]
        },
        {
          id: "clock_TF", type: 'Type1CheckboxComponent', title: "Time Format", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "12Hrs", state: false }, { name: "24Hrs", state: true }]
        },
        {
          id: "clock_AMPM", type: 'Type1CheckboxComponent', title: "", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "AM", state: false }, { name: "PM", state: true }]
        },
        {
          id: "clock_STISB", type: 'Type1CheckboxComponent', title: "Show Time in Status Bar", hidden: false, infoIconVisible: true, infoDesc: "Displays the digital clock in the status bar.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "clock_date", type: "Type2ArrowComponent", title: "Set Date (MM/DD/YY)", hidden: false, infoIconVisible: true, infoDesc: "Set Day/Month/Year.",
          cbValues: [{
            id: "date_month", type: 'Type3IncDecComponent', title: "Set Date Month", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ defaultVal: 6, minVal: 1, maxVal: 12, isCyclic: true, offsetVal: 1, valArr: [], stringState: false }]
          },
          {
            id: "date_day", type: 'Type3IncDecComponent', title: "Set Date Day", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ defaultVal: 1, minVal: 1, maxVal: 31, isCyclic: true, offsetVal: 1, valArr: [], stringState: false }]
          },
          {
            id: "date_year", type: 'Type3IncDecComponent', title: "Set Date Year", hidden: false, infoIconVisible: false, infoDesc: "",
            cbValues: [{ defaultVal: 2020, minVal: 2020, maxVal: 2030, isCyclic: true, offsetVal: 1, valArr: [], stringState: false }]
          },
          ]
        },
        {
          id: "clock_STDSO", type: 'Type1CheckboxComponent', title: "Show Time During  Screen Off", hidden: false, infoIconVisible: true, infoDesc: "Displays the digital clock during screen off.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "clock_STDDSO", type: 'Type1CheckboxComponent', title: "Show Time and Date During Screen Off", hidden: false, infoIconVisible: true, infoDesc: "Displays the digital clock and date during screen off.",
          cbValues: [{ name: "", state: false }]
        },
      ]
    },
    {
      id: 8, sideMenu: "Phone/ Bluetooth",
      list: [
        {
          id: "PB_DM", type: 'Type2ArrowComponent', title: "Device Manager", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
        {
          id: "PB_DND", type: 'Type1CheckboxComponent', title: "Do Not Disturb All", hidden: false, infoIconVisible: true, infoDesc: "Will block incoming texts, calls, or both.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "PB_ETAP", type: 'Type1CheckboxComponent', title: "Enable Two Active Phones", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "PB_PPDIC", type: 'Type1CheckboxComponent', title: "Phone Pop-ups Displayed in Cluster", hidden: false, infoIconVisible: true, infoDesc: "Displays phone pop-ups in the cluster (driver screen).",
          cbValues: [{ name: "", state: true }]
        },
      ]
    },
    {
      id: 9, sideMenu: "Voice",
      list: [
        {
          id: "voice_PVA", type: "Type2ArrowComponent", title: "Primary Voice Assistant", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "voice_alexa", type: 'Type1CheckboxComponent', title: "Alexa", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "voice_uc", type: 'Type1CheckboxComponent', title: "UConnect", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] }]
        },
        {
          id: "voice_options", type: 'Type1CheckboxComponent', title: "Voice Options", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Option1", state: false }, { name: "Option2", state: true }]
        },
        {
          id: "voice_WUW", type: "Type2ArrowComponent", title: "Wake Up Word", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "voice_off", type: 'Type1CheckboxComponent', title: "Off", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "voice_w1", type: 'Type1CheckboxComponent', title: "Word 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "voice_w2", type: 'Type1CheckboxComponent', title: "Word 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] }]
        },
        {
          id: "voice_bargein", type: 'Type1CheckboxComponent', title: "Voice Barge-In", hidden: false, infoIconVisible: true, infoDesc: "Allows you to respond to a Voice Response before the statement is completed.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "voice_CL", type: 'Type1CheckboxComponent', title: "Show Command List", hidden: false, infoIconVisible: true, infoDesc: "This will display the teleprompter with possible options while in a voice session. ",
          cbValues: [{ name: "", state: true }]
        },
      ]
    },
    {
      id: 10, sideMenu: "Trailer",
      list: [
        {
          id: "T_TTA", type: 'Type1CheckboxComponent', title: "Trailer Theft Alert", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "T_TSC", type: "Type2ArrowComponent", title: "Trailer Surround Camera", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
        {
          id: "T_CT", type: "Type2ArrowComponent", title: "Current Trailer", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "T1", type: 'Type1CheckboxComponent', title: "Trailer 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T2", type: 'Type1CheckboxComponent', title: "Trailer 2", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T3", type: 'Type1CheckboxComponent', title: "Trailer 3", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T4", type: 'Type1CheckboxComponent', title: "Trailer 4", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] }]
        },
        {
          id: "T_TN", type: "Type2ArrowComponent", title: "Trailer Name", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "T_N1", type: 'Type1CheckboxComponent', title: "Trailer 1", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N2", type: 'Type1CheckboxComponent', title: "Boat", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N3", type: 'Type1CheckboxComponent', title: "Car", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "T_N4", type: 'Type1CheckboxComponent', title: "Cargo", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N5", type: 'Type1CheckboxComponent', title: "Dump", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N6", type: 'Type1CheckboxComponent', title: "Equipment", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N7", type: 'Type1CheckboxComponent', title: "Flatbed", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N8", type: 'Type1CheckboxComponent', title: "Gooseneck", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N9", type: 'Type1CheckboxComponent', title: "Horse", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N10", type: 'Type1CheckboxComponent', title: "Livestock", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N11", type: 'Type1CheckboxComponent', title: "Motorcycle", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N12", type: 'Type1CheckboxComponent', title: "Snowmobile", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N13", type: 'Type1CheckboxComponent', title: "Travel", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N14", type: 'Type1CheckboxComponent', title: "Utility", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_N15", type: 'Type1CheckboxComponent', title: "5th Wheel", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          ]
        },
        {
          id: "T_braking", type: "Type2ArrowComponent", title: "Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "T_B1", type: 'Type1CheckboxComponent', title: "Light Electric", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_B2", type: 'Type1CheckboxComponent', title: "Surge", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_B3", type: 'Type1CheckboxComponent', title: "None", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "T_B4", type: 'Type1CheckboxComponent', title: "Heavy Electric", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_B5", type: 'Type1CheckboxComponent', title: "Light Electric over Hydraulic", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "T_B6", type: 'Type1CheckboxComponent', title: "Heavy Electric over Hydraulic", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          ]
        },
        {
          id: "T_TN", type: "Type2ArrowComponent", title: "Tow Nav", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "T_TSN", type: 'Type1CheckboxComponent', title: "Tow Specific Nav", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
            {
              id: "T_TIR", type: "Type2ArrowComponent", title: "Trailer Information - Rquired", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: []
            },
            {
              id: "T_AI", type: "Type2ArrowComponent", title: "Advanced Information - Optional", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: []
            },
            {
              id: "T_CI", type: "Type2ArrowComponent", title: "Commercial Information - Optional", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: []
            },
            { id: "T_TSA", type: 'Type1CheckboxComponent', title: "Tow Specific Alerts", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          ]
        },
        {
          id: "T_TP", type: "Type2ArrowComponent", title: "Tire Pressure", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
      ]
    },
    {
      id: 11, sideMenu: "Camera",
      list: [
        {
          id: "C_SVCD", type: 'Type1CheckboxComponent', title: "Surround View Camera Delay", hidden: false, infoIconVisible: true, infoDesc: "Allows Surround View Camera display to remain on while in drive for up to 10 seconds or 8 mph.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "C_SVCG", type: 'Type1CheckboxComponent', title: "Surround View Camera Guidelines", hidden: false, infoIconVisible: true, infoDesc: "Provides guidelines over the Surround View Camera display.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_PBCD", type: 'Type1CheckboxComponent', title: "ParkView Backup Camera Delay*", hidden: false, infoIconVisible: true, infoDesc: "Allows ParkView Backup camera display to remain on while in drive for up to 10 seconds or 8mph.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_PBCAG", type: 'Type1CheckboxComponent', title: "ParkView Backup Camera Active Guidelines*", hidden: false, infoIconVisible: true, infoDesc: "Provides active guidelines over the ParkView Backup Camera display.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_PBCFG", type: 'Type1CheckboxComponent', title: "ParkView Backup Camera Fixed Guidelines", hidden: false, infoIconVisible: true, infoDesc: "Provides fixed guidelines over the ParkView Backup Camera display.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_PBCWRD", type: 'Type1CheckboxComponent', title: "ParkView Backup Camera with Rear Door", hidden: false, infoIconVisible: true, infoDesc: "Display ParkView Backup camera while rear cargo door opens.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_CCDC", type: 'Type1CheckboxComponent', title: "Cargo Camera Dynamic Centerline", hidden: false, infoIconVisible: true, infoDesc: "Toggle between having dynamic guidelines or not",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_FFCG", type: 'Type1CheckboxComponent', title: "Forward Facing Camera Guidelines", hidden: false, infoIconVisible: true, infoDesc: "Toggle between having dynamic guidelines or not",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_TRG", type: 'Type1CheckboxComponent', title: "Trailer Reverse Guidance", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_TSABSV", type: 'Type1CheckboxComponent', title: "Turn Signal Activated Blind Spot View", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "C_TSAB", type: 'Type1CheckboxComponent', title: "Turn Signal Activated Blind Spot", hidden: false, infoIconVisible: true, infoDesc: "",
          cbValues: [{ name: "Only with Trailer", state: true }, { name: "Off", state: false }, { name: "On", state: false }]
        },
        {
          id: "T_TN", type: "Type2ArrowComponent", title: "Connected Camera", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "T_TSN", type: 'Type1CheckboxComponent', title: "Allow Access from Uconnect App", infoIconVisible: true, infoDesc: "Recordings will be sent to the Uconnect phone app when connectivity is established.", cbValues: [{ name: "Enable", state: true }, { name: "Disable", state: false }] },
            { id: "T_TSA", type: 'Type1CheckboxComponent', title: "Share Vehicle GPS Location with Uconnect App", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "Enable", state: false }, { name: "Disable", state: false }] },
          ]
        },
      ]
    },
    {
      id: 12, sideMenu: "Mirrors & Wipers",
      list: [
        {
          id: "MW_TSMR", type: 'Type1CheckboxComponent', title: "Tilt Side Mirrors in Reverse", hidden: false, infoIconVisible: true, infoDesc: "Tilts the side view mirrors downward while in reverse.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "MW_AFSM", type: 'Type1CheckboxComponent', title: "Auto Folding Side Mirrors", hidden: false, infoIconVisible: true, infoDesc: "Automatically folds and unfolds side mirrors at vehicle off and vehicle on.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "MW_RSAW", type: 'Type1CheckboxComponent', title: "Rain Sensing Auto Wipers", hidden: false, infoIconVisible: true, infoDesc: "Automatically adjusts the wiper speed based on the amount of precipitation.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "MW_HWW", type: 'Type1CheckboxComponent', title: "Headlights with Wipers", hidden: false, infoIconVisible: true, infoDesc: "Automatically turns on the headlights if your wipers are on.",
          cbValues: [{ name: "", state: false }]
        },
      ]
    },
    {
      id: 13, sideMenu: "Lights",
      list: [
        {
          id: "L_IAL", type: "Type3IncDecComponent", title: "Interior Ambient Lighting", hidden: false, infoIconVisible: true, infoDesc: "Adjusts the brightness of the interior ambient lighting.",
          cbValues: [{ defaultVal: 3, minVal: 0, maxVal: 6, isCyclic: false, offsetVal: 1, valArr: [], stringState: false }]
        },
        {
          id: "L_HOD", type: "Type3IncDecComponent", title: "Headlight Off Delay", hidden: false, infoIconVisible: true, infoDesc: "Amount of time the headlights remain on after the engine is shut off.",
          cbValues: [{ defaultVal: 3, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 Sec', '30 Sec', '60 Sec', '90 Sec'], stringState: true }]
        },
        {
          id: "L_HIOA", type: "Type3IncDecComponent", title: "Headlight Illumination on Approach", hidden: false, infoIconVisible: true, infoDesc: "Automatically turns on the headlights after unlocking the vehicle with key fob.",
          cbValues: [{ defaultVal: 3, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 Sec', '30 Sec', '60 Sec', '90 Sec'], stringState: true }]
        },
        {
          id: "L_HWW", type: 'Type1CheckboxComponent', title: "Headlights with Wipers", hidden: false, infoIconVisible: true, infoDesc: "Automatically turns on the headlights if your wipers are on.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "L_PWU", type: 'Type1CheckboxComponent', title: "Proximity Wake-Up", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_GL", type: 'Type1CheckboxComponent', title: "Greeting Lights", hidden: false, infoIconVisible: true, infoDesc: "Automatically turns on the headlights after unlocking the vehicle with key fob.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_ADBH", type: 'Type1CheckboxComponent', title: "Advanced Driving Beam Headlmp", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Advanced", state: true }, { name: "Auto", state: false }, { name: "Off", state: false }]
        },
        {
          id: "L_ADHB", type: 'Type1CheckboxComponent', title: "Auto Dim High Beams*", hidden: false, infoIconVisible: true, infoDesc: "Automatically activates/deactivates high beam headlights when approaching another vehicle.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_DRL", type: 'Type1CheckboxComponent', title: "Daytime Running Lights  ", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_SDL", type: 'Type1CheckboxComponent', title: "Steering Directed Lights  ", hidden: false, infoIconVisible: true, infoDesc: "Headlights turn relative to a change in the direction of the steering wheel.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_CL", type: 'Type1CheckboxComponent', title: "Cornering Lights", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_HD", type: 'Type1CheckboxComponent', title: "Headlight Dip", hidden: false, infoIconVisible: true, infoDesc: "Select when driving on opposite side of road to lower headlights.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_FLWL", type: 'Type1CheckboxComponent', title: "Flash Lights with Lock", hidden: false, infoIconVisible: true, infoDesc: "Flashes the lights when using the key fob to lock the vehicle doors.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_FLWSD", type: 'Type1CheckboxComponent', title: "Flash Lights with Sliding Door", hidden: false, infoIconVisible: true, infoDesc: "Flashes the lights when sliding door reverses or senses an obstacle.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_RGLCL", type: 'Type1CheckboxComponent', title: "Rear Guidance Lights w/ Cargo Lights", hidden: false, infoIconVisible: true, infoDesc: "Turns Rear Guidance Lights on when Cargo Lights are activated.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "L_UBL", type: 'Type1CheckboxComponent', title: "Underrail Bed Lights", hidden: false, infoIconVisible: true, infoDesc: "Turns Underrail Bed Lights on or off.",
          cbValues: [{ name: "", state: false }]
        }
      ]
    },
    {
      id: 14, sideMenu: "Brakes",
      list: [
        {
          id: "holdngo", type: 'Type1CheckboxComponent', title: "Hold 'n Go", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "autobrake", type: 'Type1CheckboxComponent', title: "Auto Park Brake", hidden: false, infoIconVisible: true, infoDesc: "Automatically sets the  Park Brake when the vehicle is shifted to park.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "brakeserv", type: "Type2ArrowComponent", title: "Brake Service", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
      ]
    },
    {
      id: 15, sideMenu: "Doors & Locks",
      list: [
        {
          id: "ADL", type: 'Type1CheckboxComponent', title: "Auto Door Locks", hidden: false, infoIconVisible: true, infoDesc: "Automatically locks the doors when the vehicle is in motion. ",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "AUE", type: 'Type1CheckboxComponent', title: "Auto Unlock on Exit", hidden: false, infoIconVisible: true, infoDesc: "Automatically unlocks doors when exiting the vehicle.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "AR", type: 'Type1CheckboxComponent', title: "Auto Relock", hidden: false, infoIconVisible: true, infoDesc: "Automatically relocks the doors if no doors have been opened for 30 seconds.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "FLWL", type: 'Type1CheckboxComponent', title: "Flash Lights with Lock", hidden: false, infoIconVisible: true, infoDesc: "Flashes the lights when using the key fob to lock the vehicle doors.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SHWL", type: 'Type1CheckboxComponent', title: "Sound Horn with Lock", hidden: false, infoIconVisible: true, infoDesc: "Sounds the horn when you use the key fob to lock the vehicle doors.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SHWL1", type: 'Type1CheckboxComponent', title: "Sound Horn with Lock", hidden: false, infoIconVisible: true, infoDesc: "Sounds the horn when you use the key fob to lock the vehicle doors.",
          cbValues: [{ name: "Off", state: true }, { name: "1st Press", state: false }, { name: "2nd Press", state: false }]
        },
        {
          id: "SHWRS", type: 'Type1CheckboxComponent', title: "Sound Horn with Remote Start", hidden: false, infoIconVisible: true, infoDesc: "Sounds the horn when the vehicle is remotely started.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "1PKU", type: 'Type1CheckboxComponent', title: "1st Press of Key Fob Unlocks", hidden: false, infoIconVisible: true, infoDesc: "With the first press of key fob the Driver door or All doors will unlock.",
          cbValues: [{ name: "Driver Door", state: true }, { name: "All Doors", state: false }]
        },
        {
          id: "PEU", type: 'Type1CheckboxComponent', title: "Passive Entry Unlock", hidden: false, infoIconVisible: true, infoDesc: "With the first press of key fob or passive entry the Approach Door only or Front Doors will unlock.",
          cbValues: [{ name: "Approach Door", state: false }, { name: "Front Doors", state: true }]
        },
        {
          id: "PE", type: 'Type1CheckboxComponent', title: "Passive Entry", hidden: false, infoIconVisible: true, infoDesc: "Automatically unlocks the doors when the outside door handle is grabbed.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "PE1", type: 'Type1CheckboxComponent', title: "Passive Entry", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: false }, { name: "All Doors", state: false }, { name: "Cargo Dependent", state: false }]
        },
        {
          id: "PSLKF", type: 'Type1CheckboxComponent', title: "Personal Settings Linked to Key Fob", hidden: false, infoIconVisible: true, infoDesc: "Adjusts your personal settings based on which key is being used.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "DK", type: "Type2ArrowComponent", title: "Digital Keys", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
        {
          id: "CDOA", type: 'Type1CheckboxComponent', title: "Car Door Open Alert", hidden: false, infoIconVisible: true, infoDesc: "",
          cbValues: [{ name: "Off", state: false }, { name: "Visual Only", state: false }, { name: " Visual+ Chime", state: false }]
        },
        {
          id: "HFPL", type: 'Type1CheckboxComponent', title: "Hands Free Power Liftgate", hidden: false, infoIconVisible: true, infoDesc: "Hands free technology will automatically open or close power liftgate.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "PLA", type: 'Type1CheckboxComponent', title: "Power Liftgate Alert", hidden: false, infoIconVisible: true, infoDesc: "Plays an alert when the power liftgate is raising or lowering.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "HFPSD", type: 'Type1CheckboxComponent', title: "Hands Free Power Sliding Door", hidden: false, infoIconVisible: true, infoDesc: "Hands free technology will automatically open or close power sliding door.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "FLSD", type: 'Type1CheckboxComponent', title: "Flash Lights with Sliding Door", hidden: false, infoIconVisible: true, infoDesc: "Flashes the lights when sliding door is opening.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "HFPT", type: 'Type1CheckboxComponent', title: "Hands Free Power Tailgate", hidden: false, infoIconVisible: true, infoDesc: "Hands free technology will automatically open or close power tailgate.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "PTA", type: 'Type1CheckboxComponent', title: "Power Tailgate Alert", hidden: false, infoIconVisible: true, infoDesc: "Plays an alert when the power tailgate is raising or lowering.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "TU", type: 'Type1CheckboxComponent', title: "Trunk Unlock", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Independent", state: true }, { name: "With Doors", state: false }]
        },
        {
          id: "PTEL", type: "Type2ArrowComponent", title: "Power Trunk Roof Level", hidden: false, infoIconVisible: true, infoDesc: "Set the maximum opening height of the power trunk.",
          cbValues: [{
            id: "L1", type: 'Type1CheckboxComponent', title: "Level 1 - Roof Level", hidden: false, infoIconVisible: true, infoDesc: "",
            cbValues: [{ name: "", state: true }]
          },
          {
            id: "L2", type: 'Type1CheckboxComponent', title: "Level 2 - Lower Intermediate", hidden: false, infoIconVisible: true, infoDesc: "",
            cbValues: [{ name: "", state: false }]
          },
          {
            id: "L3", type: 'Type1CheckboxComponent', title: " Level 3 - Upper Intermediate", hidden: false, infoIconVisible: true, infoDesc: "",
            cbValues: [{ name: "", state: false }]
          },
          {
            id: "L4", type: 'Type1CheckboxComponent', title: "Level 4 - Full Open", hidden: false, infoIconVisible: true, infoDesc: "",
            cbValues: [{ name: "", state: false }]
          },
          {
            id: "CT", type: 'Type1CheckboxComponent', title: "Custom", hidden: false, infoIconVisible: true, infoDesc: "",
            cbValues: [{ name: "", state: false }]
          }]
        }
      ]
    },
    {
      id: 16, sideMenu: "Seats & Comfort",
      list: [
        {
          id: "EES", type: 'Type1CheckboxComponent', title: "Easy Exit Seats", hidden: false, infoIconVisible: true, infoDesc: "Automatically moves the Driver's seat rearward once the engine is shut off.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "AOC", type: 'Type1CheckboxComponent', title: "Auto-on Comfort", hidden: false, infoIconVisible: true, infoDesc: "Based on the selected Comfort Activation Temp, the driver's *selected comfort features* will activate with vehicle start.",
          cbValues: [{ name: "Remote Start", state: true }, { name: "Off", state: false }, { name: "All Starts", state: false }]
        },
        {
          id: "AOC1", type: 'Type1CheckboxComponent', title: "Auto-On Comfort", hidden: false, infoIconVisible: true, infoDesc: "Based on the selected Comfort Activation Temp, the driver's *selected comfort features* will activate with vehicle start.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "CTA", type: "Type2ArrowComponent", title: "Comfort Temp Activation", hidden: false, infoIconVisible: false, infoDesc: "Activation temperature based on outside temperature.",
          cbValues: [
            {
              id: "DHS", type: 'Type3IncDecComponent', title: "Driver Heated Seats", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 22, minVal: 20, maxVal: 60, isCyclic: false, offsetVal: 1, unitVal: 'F' }]
            },
            {
              id: "HSW", type: 'Type3IncDecComponent', title: "Heated Steering Wheel", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 22, minVal: 20, maxVal: 60, isCyclic: false, offsetVal: 1, unitVal: 'F' }]
            },
            {
              id: "DVS", type: 'Type3IncDecComponent', title: "Driver Vented Seats", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 63, minVal: 61, maxVal: 90, isCyclic: false, offsetVal: 1, unitVal: 'F' }]
            },
            {
              id: "PHS", type: 'Type3IncDecComponent', title: "Passenger Heated Seats", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 22, minVal: 20, maxVal: 60, isCyclic: false, offsetVal: 1, unitVal: 'F' }]
            },
            {
              id: "PVS", type: 'Type3IncDecComponent', title: "Passenger Vented Seats", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 63, minVal: 61, maxVal: 90, isCyclic: false, offsetVal: 1, unitVal: 'F' }]
            },
          ]
        },
        {
          id: "AOD", type: "Type2ArrowComponent", title: "Auto-On Driver", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "HS", type: 'Type3IncDecComponent', title: "Heated Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['Off', 'Low', 'Med', 'Hi'], stringState: true }]
            },
            {
              id: "HSW", type: 'Type3IncDecComponent', title: "Heated Steering Wheel", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['Off', 'Low', 'Med', 'Hi'], stringState: true }]
            },
            {
              id: "VS", type: 'Type3IncDecComponent', title: "Vented Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['Off', 'Low', 'Med', 'Hi'], stringState: true }]
            }
          ]
        },
        {
          id: "AOD1", type: "Type2ArrowComponent", title: "Auto-On Driver", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "HS", type: 'Type1CheckboxComponent', title: "Heated Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Hi", state: false }, { name: "Low", state: false }, { name: "Off", state: true }]
            },
            {
              id: "HSW", type: 'Type1CheckboxComponent', title: "Heated Steering Wheel", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "VS", type: 'Type1CheckboxComponent', title: "Vented Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Hi", state: true }, { name: "Low", state: false }, { name: "Off", state: false }]
            }
          ]
        },

        {
          id: "AOP", type: "Type2ArrowComponent", title: "Auto-On Passenger", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "HS", type: 'Type3IncDecComponent', title: "Heated Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['Off', 'Low', 'Med', 'Hi'], stringState: true }]
            },
            {
              id: "VS", type: 'Type3IncDecComponent', title: "Vented Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['Off', 'Low', 'Med', 'Hi'], stringState: true }]
            },
          ]
        },
        {
          id: "AOP1", type: "Type2ArrowComponent", title: "Auto-On Passenger", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "HS", type: 'Type1CheckboxComponent', title: "Heated Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Hi", state: true }, { name: "Low", state: false }, { name: "Off", state: false }]
            },
            {
              id: "VS", type: 'Type1CheckboxComponent', title: "Vented Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "Hi", state: false }, { name: "Low", state: false }, { name: "Off", state: true }]
            },
          ]
        },
        {
          id: "AOP2", type: "Type2ArrowComponent", title: "Auto-On Passenger", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "HS", type: 'Type1CheckboxComponent', title: "Heated Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "VS", type: 'Type1CheckboxComponent', title: "Vented Seat", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
          ]
        },
        {
          id: "SRL", type: 'Type1CheckboxComponent', title: "3rd Row Seat Recline Lockout", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "Off", state: true }, { name: "Lock on Ignition", state: false }, { name: "Always Locked", state: false }]
        }
      ]
    },
    {
      id: 17, sideMenu: "Key Off Options",
      list: [
        {
          id: "EES", type: 'Type1CheckboxComponent', title: "Easy Exit Seats", hidden: false, infoIconVisible: true, infoDesc: "Automatically moves the Driver's seat rearward once the engine is shut off.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "KFPD", type: 'Type3IncDecComponent', title: "Key Off Power Delay", hidden: false, infoIconVisible: true, infoDesc: "Amount of time power accessories remain on after the engine is shut off.",
          cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 sec', '45 sec', '5 min', '10 min'], stringState: true }]
        },
        {
          id: "DONKF", type: 'Type3IncDecComponent', title: "Doors On Key Off Power Delay", hidden: false, infoIconVisible: true, infoDesc: "Amount of time power accessories remain on after the engine is shut off and the doors are on the vehicle.",
          cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 sec', '45 sec', '5 min', '10 min'], stringState: true }]
        },
        {
          id: "DOFKF", type: 'Type3IncDecComponent', title: "Doors Off Key Off Power Delay", hidden: false, infoIconVisible: true, infoDesc: "Amount of time power accessories remain on after the engine is shut off and the doors are off the vehicle.",
          cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 sec', '45 sec', '5 min', '10 min'], stringState: true }]
        },
        {
          id: "HOD", type: 'Type3IncDecComponent', title: "Headlight Off Delay", hidden: false, infoIconVisible: true, infoDesc: "Amount of time the headlights remain on after the engine is shut off.",
          cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 sec', '30 sec', '60 sec', '90 sec'], stringState: true }]
        },
        {
          id: "AEES", type: 'Type1CheckboxComponent', title: "Auto Entry/Exit Suspension", hidden: false, infoIconVisible: true, infoDesc: "Automatically lowers vehicle from ride height position when vehicle shifted to park.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "ROD", type: 'Type3IncDecComponent', title: "Radio Off Delay", hidden: false, infoIconVisible: true, infoDesc: "Radio remains on for selected amount of time while engine is off.",
          cbValues: [{ defaultVal: 2, minVal: 1, maxVal: 4, isCyclic: false, offsetVal: 1, valArr: ['0 sec', '30 sec', '5 min', '10 min'], stringState: true }]
        },
        {
          id: "ROD1", type: 'Type1CheckboxComponent', title: "Radio Off Delay", hidden: false, infoIconVisible: true, infoDesc: "Radio remains on for selected amount of time while engine is off.",
          cbValues: [{ name: "0 min", state: true }, { name: "20 min", state: false }]
        },
        {
          id: "ROD2", type: 'Type1CheckboxComponent', title: "Radio Off Delay", hidden: false, infoIconVisible: true, infoDesc: "Radio remains on for selected amount of time while engine is off.",
          cbValues: [{ name: "0 min", state: true }, { name: "60 min", state: false }]
        },
        {
          id: "ROD3", type: 'Type1CheckboxComponent', title: "Radio Off Delay", hidden: false, infoIconVisible: true, infoDesc: "Radio remains on for selected amount of time while engine is off.",
          cbValues: [{ name: "0 min", state: true }, { name: "180 min", state: false }]
        },
        {
          id: "ROWD", type: 'Type1CheckboxComponent', title: "Radio Off with Door", hidden: false, infoIconVisible: true, infoDesc: "Radio remains on until driver or passenger door is opened or when Radio Off Delay selected time expires.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "WWKF", type: 'Type1CheckboxComponent', title: "Windows with Key Fob", hidden: false, infoIconVisible: true, infoDesc: "Allows for key fob control of windows while the engine is off.",
          cbValues: [{ name: "", state: false }]
        },
      ]
    },
    {
      id: 18, sideMenu: "Suspension",
      list: [
        {
          id: "SHWL", type: 'Type1CheckboxComponent', title: "Sound Horn with Lower", hidden: false, infoIconVisible: true, infoDesc: "Sounds horn when vehicle is remotely lowered.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "FLWL", type: 'Type1CheckboxComponent', title: "Flash Lights with Lower", hidden: false, infoIconVisible: true, infoDesc: "Flashes lights when vehicle is remotely lowered.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "AEES", type: 'Type1CheckboxComponent', title: "Auto Entry/Exit Suspension", hidden: false, infoIconVisible: true, infoDesc: "Automatically lowers vehicle from ride height position when vehicle shifted to park.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "DSM", type: 'Type1CheckboxComponent', title: "Display Suspension Messages", hidden: false, infoIconVisible: true, infoDesc: "Display all suspension related messages or only suspension warning messages.",
          cbValues: [{ name: "All", state: true }, { name: "Warning only", state: false }]
        },
        {
          id: "AM", type: 'Type1CheckboxComponent', title: "Aero Mode", hidden: false, infoIconVisible: true, infoDesc: "Automatically sets vehicle to Aero ride height when vehicle goes above set speed.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "TJM", type: 'Type1CheckboxComponent', title: "Tire Jack Mode", hidden: false, infoIconVisible: true, infoDesc: "Prevents auto leveling of air suspension while vehicle is on a jack.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "AMS", type: 'Type1CheckboxComponent', title: "Auxiliary Modes", hidden: false, infoIconVisible: false, infoDesc: " ",
          cbValues: [{ name: "Off", state: true }, { name: "Transport", state: false }, { name: "Wheel Alignment", state: true }]
        },
        {
          id: "TM", type: 'Type1CheckboxComponent', title: "Transport Mode", hidden: false, infoIconVisible: true, infoDesc: "Prevents auto leveling of air suspension while vehicle is being transported. ",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "WAM", type: 'Type1CheckboxComponent', title: "Wheel Alignment Mode", hidden: false, infoIconVisible: true, infoDesc: "Prevents auto leveling of air suspension while performing wheel alignment service.",
          cbValues: [{ name: "", state: false }]
        }
      ]
    },
    {
      id: 19, sideMenu: "Reconfigurable Switches",
      list: [
        {
          id: "aux1", type: "Type2ArrowComponent", title: "AUX 1", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "A1_TYPE", type: 'Type1CheckboxComponent', title: "Type", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch either latching or momentary.",
              cbValues: [{ name: "Latching", state: false }, { name: "Momentary", state: true }]
            },
            {
              id: "A1_PS", type: 'Type1CheckboxComponent', title: "Power Source", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch power source either battery powered or ignition powered.",
              cbValues: [{ name: "Battery", state: false }, { name: "Ignition", state: true }]
            },
            {
              id: "A1_RLS", type: 'Type1CheckboxComponent', title: "Recall last state", hidden: false, infoIconVisible: true, infoDesc: "Remembers whether Auxiliary switch was on or off between ignition cycles.",
              cbValues: [{ name: "", state: true }]
            },
          ]
        },
        {
          id: "aux2", type: "Type2ArrowComponent", title: "AUX 2", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "A2_TYPE", type: 'Type1CheckboxComponent', title: "Type", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch either latching or momentary.",
              cbValues: [{ name: "Latching", state: false }, { name: "Momentary", state: true }]
            },
            {
              id: "A2_PS", type: 'Type1CheckboxComponent', title: "Power Source", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch power source either battery powered or ignition powered.",
              cbValues: [{ name: "Battery", state: false }, { name: "Ignition", state: true }]
            },
            {
              id: "A2_RLS", type: 'Type1CheckboxComponent', title: "Recall last state", hidden: false, infoIconVisible: true, infoDesc: "Remembers whether Auxiliary switch was on or off between ignition cycles.",
              cbValues: [{ name: "", state: true }]
            },
          ]
        },
        {
          id: "aux3", type: "Type2ArrowComponent", title: "AUX 3", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "A3_TYPE", type: 'Type1CheckboxComponent', title: "Type", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch either latching or momentary.",
              cbValues: [{ name: "Latching", state: false }, { name: "Momentary", state: true }]
            },
            {
              id: "A3_PS", type: 'Type1CheckboxComponent', title: "Power Source", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch power source either battery powered or ignition powered.",
              cbValues: [{ name: "Battery", state: false }, { name: "Ignition", state: true }]
            },
            {
              id: "A3_RLS", type: 'Type1CheckboxComponent', title: "Recall last state", hidden: false, infoIconVisible: true, infoDesc: "Remembers whether Auxiliary switch was on or off between ignition cycles.",
              cbValues: [{ name: "", state: true }]
            },
          ]
        },
        {
          id: "aux4", type: "Type2ArrowComponent", title: "AUX 4", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "A4_TYPE", type: 'Type1CheckboxComponent', title: "Type", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch either latching or momentary.",
              cbValues: [{ name: "Latching", state: false }, { name: "Momentary", state: true }]
            },
            {
              id: "A4_PS", type: 'Type1CheckboxComponent', title: "Power Source", hidden: false, infoIconVisible: true, infoDesc: "Choose type of Auxiliary switch power source either battery powered or ignition powered.",
              cbValues: [{ name: "Battery", state: false }, { name: "Ignition", state: true }]
            },
            {
              id: "A4_RLS", type: 'Type1CheckboxComponent', title: "Recall last state", hidden: false, infoIconVisible: true, infoDesc: "Remembers whether Auxiliary switch was on or off between ignition cycles.",
              cbValues: [{ name: "", state: true }]
            },
          ]
        },
        {
          id: "SWRC", type: "Type2ArrowComponent", title: "Steering Wheel Rear Controls", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: []
        },
      ]
    },
    {
      id: 20, sideMenu: "Audio",
      list: [
        {
          id: "audio", type: 'Type2ArrowComponent', title: "Audio settings", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
      ]
    },
    {
      id: 21, sideMenu: "Notifications",
      list: [
        {
          id: "NS", type: 'Type1CheckboxComponent', title: "Notifications Sounds", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "ADFP", type: 'Type1CheckboxComponent', title: "App Drawer Favoriting Popups", hidden: false, infoIconVisible: true, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "ADUP", type: 'Type1CheckboxComponent', title: "App Drawer Unfavoriting Popups", hidden: false, infoIconVisible: true, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "NTMP", type: 'Type1CheckboxComponent', title: "New Text Message Popups", hidden: false, infoIconVisible: true, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "MCM", type: 'Type1CheckboxComponent', title: "Missed Calls Message", hidden: false, infoIconVisible: true, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "WCSP", type: 'Type1CheckboxComponent', title: "Wireless Charger Status Popups", hidden: false, infoIconVisible: true, infoDesc: "Displays Wireless Charger Status pop-ups on the infotainment display.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "DMTP", type: 'Type1CheckboxComponent', title: "Drive Mode Transition Popups", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        }
      ]
    },
    {
      id: 22, sideMenu: "SiriusXM Setup",
      list: [{
        id: "sxm", type: "Type2ArrowComponent", title: "SiriusXM Account, Profiles & Settings", hidden: false, infoIconVisible: false, infoDesc: "",
        cbValues: []
      },
      ]
    },
    {
      id: 23, sideMenu: "Radio Setup",
      list: [
        {
          id: "TA", type: 'Type1CheckboxComponent', title: "Traffic Announcement", hidden: false, infoIconVisible: true, infoDesc: "Allows the system to pause recievers and media to issue a traffic bulletin.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "DAB", type: 'Type1CheckboxComponent', title: "DAB Announcements", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "DAC", type: "Type2ArrowComponent", title: "DAB Announcements Categories", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "alarm", type: 'Type1CheckboxComponent', title: "Alarm", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: true }]
            },
            {
              id: "DAB_EA", type: 'Type1CheckboxComponent', title: "Event Announcement", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_FR", type: 'Type1CheckboxComponent', title: "Financial Report", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_NF", type: 'Type1CheckboxComponent', title: "News Flash", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_PI", type: 'Type1CheckboxComponent', title: "Programme Information", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_RTF", type: 'Type1CheckboxComponent', title: "Road Traffic Flash", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_SE", type: 'Type1CheckboxComponent', title: "Special Event", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_SR", type: 'Type1CheckboxComponent', title: "Sport Report", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_TF", type: 'Type1CheckboxComponent', title: "Transport Flash", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_WA", type: 'Type1CheckboxComponent', title: "Warning Announcement", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "DAB_WF", type: 'Type1CheckboxComponent', title: "Weather Flash", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
          ]


        },
        {
          id: "AF", type: 'Type1CheckboxComponent', title: "Alternative Frequency", hidden: false, infoIconVisible: true, infoDesc: "Allows the frequency to change automatically to maintain the strongest signal.",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "Re", type: 'Type1CheckboxComponent', title: "Regional", hidden: false, infoIconVisible: true, infoDesc: "Forces regional service-following enabling automatic switching to networked stations.",
          cbValues: [{ name: "", state: false }]
        }, {
          id: "CR", type: 'Type1CheckboxComponent', title: "Connected Radio", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "AOR", type: "Type2ArrowComponent", title: "Advanced Online Radios", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "OFF", type: 'Type1CheckboxComponent', title: "Off", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "LQ", type: 'Type1CheckboxComponent', title: "Low Quality", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "MQ", type: 'Type1CheckboxComponent', title: "Mid Quality", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
            {
              id: "HQ", type: 'Type1CheckboxComponent', title: "High Quality", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            }
          ]
        }
      ]
    },

    {
      id: 24, sideMenu: 'dnaMessages',
      list: [
        {
          id: "DM", type: 'Type1CheckboxComponent', title: "dna Messages", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        }
      ]
    },
    {
      id: 25, sideMenu: 'Accessibility',
      list: [
        {
          id: "RSVBR", type: 'Type1CheckboxComponent', title: "Rear Seat Video Button Readback", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "PSVBR", type: 'Type1CheckboxComponent', title: "Passenger Screen Video Button Readback", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        }, {
          id: "CC", type: "Type2ArrowComponent", title: "Color Correction", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            { id: "NF", type: 'Type1CheckboxComponent', title: "No Filter", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "PRG", type: 'Type1CheckboxComponent', title: "Protanopia (Red/Green)", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "DGR", type: 'Type1CheckboxComponent', title: "Deuteranopia (Green/Red)", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
            { id: "TBY", type: 'Type1CheckboxComponent', title: "Tritanopia (Blue/Yellow)", hidden: false, infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] }
          ]
        }
      ]
    },
    {
      id: 26, sideMenu: 'Geolocation',
      list: [
        {
          id: "Ge", type: 'Type1CheckboxComponent', title: "Geolocation", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        }
      ]
    },
    {
      id: 27, sideMenu: 'Software Updates',
      list: [
        {
          id: "SD", type: "Type2ArrowComponent", title: "Software Downloads over Wi-Fi", infoIconVisible: false, infoDesc: "", hidden: false,
        }
      ]
    }, {
      id: 28, sideMenu: 'System Information',
      list: [
        {
          id: "EC", type: "Type2ArrowComponent", title: "Encryption and Credentials", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ id: "ICUB", type: 'Type1CheckboxComponent', title: "Import Credentials from USB Storage", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: true }] },
          { id: "VMSC", type: 'Type1CheckboxComponent', title: "View and Modify Stored Credentials", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "ST", type: 'Type1CheckboxComponent', title: "Storage Type", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "TC", type: 'Type1CheckboxComponent', title: "Trusted Credentials", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          { id: "ST", type: 'Type1CheckboxComponent', title: "Encrypt Device", infoIconVisible: false, infoDesc: "", cbValues: [{ name: "", state: false }] },
          ]
        }, {
          id: "PL", type: "Type2ArrowComponent", title: "Opening Links", hidden: false, infoIconVisible: false, infoDesc: "",
        }, {
          id: "VI", type: "Type2ArrowComponent", title: "Version Information", hidden: false, infoIconVisible: false, infoDesc: "",
        }, {
          id: "LI", type: "Type2ArrowComponent", title: "License Information", hidden: false, infoIconVisible: false, infoDesc: "",
        }, {
          id: "FCC", type: "Type2ArrowComponent", title: "FCC ID", hidden: false, infoIconVisible: false, infoDesc: "",
        }
      ]
    }, {
      id: 29, sideMenu: 'Reset',
      list: [
        {
          id: "RADFDR", type: "Type2ArrowComponent", title: "Reset App Drawer Favorites to Default Order", hidden: false, infoIconVisible: true, infoDesc: "",
        },  {
          id: "RSD", type: "Type2ArrowComponent", title: "Restore Settings to Default", hidden: false, infoIconVisible: true, infoDesc: "",
        }, {
          id: "CPD", type: "Type2ArrowComponent", title: "Clear Personal Data", hidden: false, infoIconVisible: true, infoDesc: "",
        }, {
          id: "RPP", type: "Type2ArrowComponent", title: "Reset Wi-Fi Password for Projection", hidden: false, infoIconVisible: true, infoDesc: "",
        }, {
          id: "RPV", type: "Type2ArrowComponent", title: "Reset Performance Values", hidden: false, infoIconVisible: true, infoDesc: "",
        }, {
          id: "FR", type: "Type2ArrowComponent", title: "Factory Reset", hidden: false, infoIconVisible: true, infoDesc: "",
        },
      ]
    },
    {
      id: 30, sideMenu: 'KeySense',
      list: [
        {
          id: "SDA_FAEB", type: 'Type2ArrowComponent', title: "Front Automatic Emergency Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [
            {
              id: "SDA_FCW", type: 'Type1CheckboxComponent', title: "Forward Collision Warning", hidden: false, infoIconVisible: true, infoDesc: "Provides a warning in case of potential forward collision, or applies brakes and a warning",
              cbValues: [{ name: "Only Warning", state: true }, { name: "Warning+ Active Braking", state: false }]
            },
            {
              id: "SDA_FCW", type: 'Type1CheckboxComponent', title: "Forward Collision Warning", hidden: false, infoIconVisible: true, infoDesc: "Applies brakes to slow vehicle in case of potential forward collision, or applies brakes and provides a warning.",
              cbValues: [{ name: "Only Active Braking", state: true }, { name: "Warn + Active Braking", state: false }]
            },
            {
              id: "SDA_FCS", type: 'Type1CheckboxComponent', title: "Forward Collision Sensitivity", hidden: false, infoIconVisible: true, infoDesc: "Sets the distance in which a Forward Collision Warning will occur..",
              cbValues: [{ name: "Near", state: false }, { name: "Far", state: false }]
            },
            {
              id: "SDA_FCS", type: 'Type1CheckboxComponent', title: "Forward Collision Sensitivity", hidden: false, infoIconVisible: true, infoDesc: "Sets the distance in which a Forward Collision Warning will occur.",
              cbValues: [{ name: "Near", state: false }, { name: "Med", state: false }, { name: "Far", state: false }]
            },
            {
              id: "SDA_FCS", type: 'Type1CheckboxComponent', title: "Forward Collision Warning Active Braking", hidden: false, infoIconVisible: false, infoDesc: "",
              cbValues: [{ name: "", state: false }]
            },
          ]
        },
        {
          id: "SDA_FCS", type: 'Type1CheckboxComponent', title: "Rear Automatic Emergency Braking", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_FCS", type: 'Type1CheckboxComponent', title: "Rear Cross Path", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: false }]
        },
        {
          id: "SDA_PARKSENSE", type: 'Type1CheckboxComponent', title: "ParkSense", hidden: false, infoIconVisible: true, infoDesc: "Provides alerts (sound or sound & braking) to indicate proximity to other objects.",
          cbValues: [{ name: "Only Warning", state: true }, { name: "Warning + Braking Assist", state: false }]
        },
        {
          id: "SDA_PARKSENSE", type: 'Type1CheckboxComponent', title: "ParkSense", hidden: false, infoIconVisible: true, infoDesc: "Provides alerts (sound or sound & braking) to indicate proximity to other objects.",
          cbValues: [{ name: "Sound Only", state: true }, { name: "Sound + Display", state: false }]
        },
        {
          id: "SDA_RPBA", type: 'Type1CheckboxComponent', title: "Rear ParkSense Braking Assist", hidden: false, infoIconVisible: false, infoDesc: "",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_FPV", type: 'Type1CheckboxComponent', title: "Front ParkSense Volume", hidden: false, infoIconVisible: true, infoDesc: "Adjusts volume of front ParkSense alert.",
          cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "High", state: false }]
        },
        {
          id: "SDA_RPV", type: 'Type1CheckboxComponent', title: "Rear ParkSense Volume", hidden: false, infoIconVisible: true, infoDesc: "Adjusts volume of rear ParkSense alert.",
          cbValues: [{ name: "Low", state: true }, { name: "Med", state: false }, { name: "High", state: false }]
        },
        {
          id: "SDA_BSA", type: 'Type1CheckboxComponent', title: "Blind Spot Alert", hidden: false, infoIconVisible: true, infoDesc: "Provides alerts (light or light & chime) to indicate objects in your blind spot.",
          cbValues: [{ name: "Lights", state: false }, { name: "Lights + Chime", state: false }]
        },
        {
          id: "SDA_ISCO", type: 'Type3IncDecComponent', title: "Maximum Vehicle Speed", hidden: false, infoIconVisible: true, infoDesc: "Set a maximum vehicle speed.",
          cbValues: [{ defaultVal: 70, minVal: 65, maxVal: 85, isCyclic: false, offsetVal: 5, valArr: [], stringState: false }]
        },

        {
          id: "SDA_RPBA", type: 'Type1CheckboxComponent', title: "Start Up Fuel Level Message ", hidden: false, infoIconVisible: true, infoDesc: "Provides a distance to empty fuel message in the driver screen with vehicle start.",
          cbValues: [{ name: "", state: true }]
        },
        {
          id: "SDA_RPBA", type: 'Type1CheckboxComponent', title: "Earlier Low Fuel Alert ", hidden: false, infoIconVisible: true, infoDesc: "Provides an earlier low fuel alert message in driver screen.",
          cbValues: [{ name: "", state: true }]
        }
      ]
    }
  ]

  @Output() sideMenuChanged:EventEmitter<any> = new EventEmitter<any>();
  private defaultMenu = 'My Profile';
  constructor() { }
  private crntSettingsList = new BehaviorSubject(this.settingsList);
  public changedSettingsList = this.crntSettingsList.asObservable();

  private crntMenu = new BehaviorSubject(this.defaultMenu);
  public changedSideMenu = this.crntMenu.asObservable();

  public updateSideMenu(menu){
    this.crntMenu.next(menu);
  }

  public updateSettingsList(list) {
    this.crntSettingsList.next(list);
  }

}
