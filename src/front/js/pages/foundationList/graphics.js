import React from "react";

export const Graphics = () => {
    return(
        <>
        <div className="row g-4">
            <div className="col-xxl-8">
              <div className="card shadow h-100">
                <div className="card-header border-bottom">
                  <h5 className="card-header-title">Foundations Activity</h5>
                </div>

                {/* <!-- Card body --> */}
                <div className="card-body">
                  <div className="d-flex gap-4 mb-3">
                    <h6><span className="fw-light"><i className="bi bi-square-fill text-primary"></i> Check-in:</span> 475 Donors</h6>
                    <h6><span className="fw-light"><i className="bi bi-square-fill text-info"></i> Check-out:</span> 157 Donors</h6>
                  </div>
                  {/* <!-- Apex chart --> */}
                  <div id="ChartGuesttraffic" className="mt-2" style={{ minHeight: "365px" }}>
                    <div id="apexcharts9lxde2yj" className="apexcharts-canvas apexcharts9lxde2yj apexcharts-theme-light" style={{ width: "1001px", height: "350px" }}>
                      <svg id="SvgjsSvg1295" width="1001" height="350" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" transform="translate(0, 0)" style={{ background: "transparent" }}>
                        <foreignObject x="0" y="0" width="1001" height="350">
                          <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style={{ inset: "auto 0px 1px", position: "absolute", maxHeight: "175px" }}>
                            <div className="apexcharts-legend-series" rel="1" seriesname="Check-in" data-collapsed="false" style={{ margin: "2px 5px" }}>
                              <span className="apexcharts-legend-marker" rel="1" data-collapsed="false" style={{ background: "rgb(142, 133, 230) !important", color: "rgb(142, 133, 230)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px" }}></span>
                              <span className="apexcharts-legend-text" rel="1" i="0" data-default-text="Check-in" data-collapsed="false" style={{ color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif" }}>Check-in</span>
                            </div>
                            <div className="apexcharts-legend-series" rel="2" seriesname="Check-out" data-collapsed="false" style={{ margin: "2px 5px" }}>
                              <span className="apexcharts-legend-marker" rel="2" data-collapsed="false" style={{ background: "rgb(23, 162, 184) !important", color: "rgb(23, 162, 184)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px" }}></span>
                              <span className="apexcharts-legend-text" rel="2" i="1" data-default-text="Check-out" data-collapsed="false" style={{ color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif" }}>Check-out</span>
                            </div>
                          </div>


                          <div id="ChartGuesttraffic" className="mt-2" style={{ minHeight: "365px" }}>
                            <div id="apexcharts9lxde2yj" className="apexcharts-canvas apexcharts9lxde2yj apexcharts-theme-light" style={{ width: "1001px", height: "350px" }}>
                              <svg id="SvgjsSvg1295" width="1001" height="350" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" transform="translate(0, 0)" style={{ background: "transparent" }}>
                                <foreignObject x="0" y="0" width="1001" height="350">
                                  <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style={{ inset: "auto 0px 1px", position: "absolute", maxHeight: "175px" }}>
                                    <div className="apexcharts-legend-series" rel="1" seriesname="Check-in" data-collapsed="false" style={{ margin: "2px 5px" }}>
                                      <span className="apexcharts-legend-marker" rel="1" data-collapsed="false" style={{ background: "rgb(142, 133, 230) !important", color: "rgb(142, 133, 230)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px" }}></span>
                                      <span className="apexcharts-legend-text" rel="1" i="0" data-default-text="Check-in" data-collapsed="false" style={{ color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif" }}>Check-in</span>
                                    </div>
                                    <div className="apexcharts-legend-series" rel="2" seriesname="Check-out" data-collapsed="false" style={{ margin: "2px 5px" }}>
                                      <span className="apexcharts-legend-marker" rel="2" data-collapsed="false" style={{ background: "rgb(23, 162, 184) !important", color: "rgb(23, 162, 184)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px" }}></span>
                                      <span className="apexcharts-legend-text" rel="2" i="1" data-default-text="Check-out" data-collapsed="false" style={{ color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif" }}>Check-out</span>
                                    </div>
                                  </div>
                                </foreignObject>
                              </svg>
                            </div>
                          </div>

                        </foreignObject>
                        <rect id="SvgjsRect1300" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fefefe">
                        </rect><g id="SvgjsG1373" className="apexcharts-yaxis" rel="0" transform="translate(14.546875, 0)">
                          <g id="SvgjsG1374" className="apexcharts-yaxis-texts-g">
                            <text id="SvgjsText1376" fontFamily="Helvetica, Arial, sans-serif" x="20" y="32" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1377">110</tspan>
                              <title>110</title>
                            </text>
                            <text id="SvgjsText1379" fontFamily="Helvetica, Arial, sans-serif" x="20" y="58.4348" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1380">100</tspan>
                              <title>100</title>
                            </text><text id="SvgjsText1382" fontFamily="Helvetica, Arial, sans-serif" x="20" y="84.8696" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1383">90</tspan>
                              <title>90</title>
                            </text><text id="SvgjsText1385" fontFamily="Helvetica, Arial, sans-serif" x="20" y="111.30440000000002" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1386">80</tspan>
                              <title>80</title>
                            </text>
                            <text id="SvgjsText1388" fontFamily="Helvetica, Arial, sans-serif" x="20" y="137.7392" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1389">70</tspan>
                              <title>70</title></text><text id="SvgjsText1391" fontFamily="Helvetica, Arial, sans-serif" x="20" y="164.174" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1392">60</tspan>
                              <title>60</title>
                            </text>
                            <text id="SvgjsText1394" fontFamily="Helvetica, Arial, sans-serif" x="20" y="190.6088" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1395">50</tspan>
                              <title>50</title>
                            </text>
                            <text id="SvgjsText1397" fontFamily="Helvetica, Arial, sans-serif" x="20" y="217.0436" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1398">40</tspan>
                              <title>40</title>
                            </text>
                            <text id="SvgjsText1400" fontFamily="Helvetica, Arial, sans-serif" x="20" y="243.4784" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1401">30</tspan>
                              <title>30</title>
                            </text><text id="SvgjsText1403" fontFamily="Helvetica, Arial, sans-serif" x="20" y="269.9132" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1404">20</tspan>
                              <title>20</title>
                            </text><text id="SvgjsText1406" fontFamily="Helvetica, Arial, sans-serif" x="20" y="296.348" textAnchor="end" dominantBaseline="auto" fontSize="11px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1407">10</tspan>
                              <title>10</title>
                            </text>
                          </g>
                        </g>
                        <g id="SvgjsG1297" className="apexcharts-inner apexcharts-graphical" transform="translate(44.546875, 30)">
                          <defs id="SvgjsDefs1296">
                            <clipPath id="gridRectMask9lxde2yj">
                              <rect id="SvgjsRect1302" width="941.89453125" height="272.348" x="-4" y="-4" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff"></rect>
                            </clipPath>
                            <clipPath id="forecastMask9lxde2yj"></clipPath>
                            <clipPath id="nonForecastMask9lxde2yj"></clipPath>
                            <clipPath id="gridRectMarkerMask9lxde2yj">
                              <rect id="SvgjsRect1303" width="937.89453125" height="268.348" x="-2" y="-2" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeasharray="0" fill="#fff"></rect>
                            </clipPath>
                            <linearGradient id="SvgjsLinearGradient1308" x1="0" y1="0" x2="0" y2="1">
                              <stop id="SvgjsStop1309" stopOpacity="0.65" stopColor="rgba(142,133,230,0.65)" offset="0"></stop>
                              <stop id="SvgjsStop1310" stopOpacity="0.5" stopColor="rgba(199,194,243,0.5)" offset="1">
                              </stop>
                              <stop id="SvgjsStop1311" stopOpacity="0.5" stopColor="rgba(199,194,243,0.5)" offset="1">
                              </stop></linearGradient><linearGradient id="SvgjsLinearGradient1317" x1="0" y1="0" x2="0" y2="1">
                              <stop id="SvgjsStop1318" stopOpacity="0.65" stopColor="rgba(23,162,184,0.65)" offset="0">
                              </stop>
                              <stop id="SvgjsStop1319" stopOpacity="0.5" stopColor="rgba(139,209,220,0.5)" offset="1">
                              </stop>
                              <stop id="SvgjsStop1320" stopOpacity="0.5" stopColor="rgba(139,209,220,0.5)" offset="1">
                              </stop>
                            </linearGradient>
                          </defs>
                          <line id="SvgjsLine1301" x1="0" y1="0" x2="0" y2="264.348" stroke="#b6b6b6" strokeDasharray="3" strokeLinecap="butt" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="264.348" fill="#b1b9c4" filter="none" fillOpacity="0.9" strokeWidth="1">
                          </line>
                          <line id="SvgjsLine1327" x1="0" y1="265.348" x2="0" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <line id="SvgjsLine1328" x1="155.64908854166666" y1="265.348" x2="155.64908854166666" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <line id="SvgjsLine1329" x1="311.2981770833333" y1="265.348" x2="311.2981770833333" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <line id="SvgjsLine1330" x1="466.947265625" y1="265.348" x2="466.947265625" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <line id="SvgjsLine1331" x1="622.5963541666666" y1="265.348" x2="622.5963541666666" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <line id="SvgjsLine1332" x1="778.2454427083333" y1="265.348" x2="778.2454427083333" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <line id="SvgjsLine1333" x1="933.8945312499999" y1="265.348" x2="933.8945312499999" y2="271.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-xaxis-tick">
                          </line>
                          <g id="SvgjsG1323" className="apexcharts-grid">
                            <g id="SvgjsG1324" className="apexcharts-gridlines-horizontal">
                              <line id="SvgjsLine1335" x1="0" y1="26.434800000000003" x2="933.89453125" y2="26.434800000000003" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1336" x1="0" y1="52.869600000000005" x2="933.89453125" y2="52.869600000000005" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1337" x1="0" y1="79.30440000000002" x2="933.89453125" y2="79.30440000000002" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1338" x1="0" y1="105.73920000000001" x2="933.89453125" y2="105.73920000000001" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1339" x1="0" y1="132.174" x2="933.89453125" y2="132.174" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1340" x1="0" y1="158.6088" x2="933.89453125" y2="158.6088" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1341" x1="0" y1="185.0436" x2="933.89453125" y2="185.0436" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1342" x1="0" y1="211.4784" x2="933.89453125" y2="211.4784" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                              <line id="SvgjsLine1343" x1="0" y1="237.9132" x2="933.89453125" y2="237.9132" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                              </line>
                            </g>
                            <g id="SvgjsG1325" className="apexcharts-gridlines-vertical">
                            </g>
                            <line id="SvgjsLine1346" x1="0" y1="264.348" x2="933.89453125" y2="264.348" stroke="transparent" strokeDasharray="0" strokeLinecap="butt">
                            </line>
                            <line id="SvgjsLine1345" x1="0" y1="1" x2="0" y2="264.348" stroke="transparent" strokeDasharray="0" strokeLinecap="butt">
                            </line>
                          </g>
                          <g id="SvgjsG1326" className="apexcharts-grid-borders">
                            <line id="SvgjsLine1334" x1="0" y1="0" x2="933.89453125" y2="0" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                            </line>
                            <line id="SvgjsLine1344" x1="0" y1="264.348" x2="933.89453125" y2="264.348" stroke="#e0e0e0" strokeDasharray="0" strokeLinecap="butt" className="apexcharts-gridline">
                            </line>
                            <line id="SvgjsLine1372" x1="0" y1="265.348" x2="933.89453125" y2="265.348" stroke="#e0e0e0" strokeDasharray="0" strokeWidth="1" strokeLinecap="butt">
                            </line>
                          </g>
                          <g id="SvgjsG1304" className="apexcharts-area-series apexcharts-plot-series">
                            <g id="SvgjsG1305" className="apexcharts-series" zindex="0" seriesname="Check-in" datalongestseries="true" rel="1" datarealindex="0">

                              <path id="SvgjsPath1312" d="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996C 933.89453125 26.434799999999996 933.89453125 26.434799999999996 933.89453125 264.348 L 0 264.348z" fill="url(#SvgjsLinearGradient1308)" fillOpacity="1" strokeOpacity="1" strokeLinecap="butt" strokeWidth="0" strokeDasharray="0" className="apexcharts-area" index="0" clipPath="url(#gridRectMask9lxde2yj)" pathto="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996C 933.89453125 26.434799999999996 933.89453125 26.434799999999996 933.89453125 264.348 L 0 264.348z" pathfrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828">
                              </path>
                              <path id="SvgjsPath1313" d="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996M 933.89453125 26.434799999999996" fill="none" fillOpacity="1" stroke="#8e85e6" strokeOpacity="1" strokeLinecap="butt" strokeWidth="4" strokeDasharray="0" className="apexcharts-area" index="0" clipPath="url(#gridRectMask9lxde2yj)" pathto="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996M 933.89453125 26.434799999999996" pathfrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828" fillRule="evenodd">
                              </path>
                              <g id="SvgjsG1306" className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" datarealindex="0">
                                <g className="apexcharts-series-markers">
                                  <circle id="SvgjsCircle1411" r="0" cx="0" cy="0" className="apexcharts-marker wm3z2lwx2 no-pointer-events" stroke="#ffffff" fill="#8e85e6" fillOpacity="1" strokeWidth="2" strokeOpacity="0.9" default-marker-size="0">
                                  </circle>
                                </g>
                              </g>
                            </g>
                            <g id="SvgjsG1314" className="apexcharts-series" zindex="1" seriesname="Check-out" datalongestseries="true" rel="2" datarealindex="1">
                              <path id="SvgjsPath1321" d="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002C 933.89453125 182.40012000000002 933.89453125 182.40012000000002 933.89453125 264.348 L 0 264.348z" fill="url(#SvgjsLinearGradient1317)" fillOpacity="1" strokeOpacity="1" strokeLinecap="butt" strokeWidth="0" strokeDasharray="0" className="apexcharts-area" index="1" clipPath="url(#gridRectMask9lxde2yj)" pathto="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002C 933.89453125 182.40012000000002 933.89453125 182.40012000000002 933.89453125 264.348 L 0 264.348z" pathfrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828">
                              </path>
                              <path id="SvgjsPath1322" d="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002M 933.89453125 182.40012000000002" fill="none" fillOpacity="1" stroke="#17a2b8" strokeOpacity="1" strokeLinecap="butt" strokeWidth="4" strokeDasharray="0" className="apexcharts-area" index="1" clipPath="url(#gridRectMask9lxde2yj)" pathto="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002M 933.89453125 182.40012000000002" pathfrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828" fillRule="evenodd">
                              </path>
                              <g id="SvgjsG1315" className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" datarealindex="1">
                                <g className="apexcharts-series-markers">
                                  <circle id="SvgjsCircle1412" r="0" cx="0" cy="0" className="apexcharts-marker widbttb6w no-pointer-events" stroke="#ffffff" fill="#17a2b8" fillOpacity="1" strokeWidth="2" strokeOpacity="0.9" default-marker-size="0">
                                  </circle>
                                </g>
                              </g>
                            </g>
                            <g id="SvgjsG1307" className="apexcharts-datalabels" datarealindex="0"></g>
                            <g id="SvgjsG1316" className="apexcharts-datalabels" datarealindex="1"></g>
                          </g>
                          <line id="SvgjsLine1347" x1="0" y1="0" x2="933.89453125" y2="0" stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1" strokeLinecap="butt" className="apexcharts-ycrosshairs">
                          </line>
                          <line id="SvgjsLine1348" x1="0" y1="0" x2="933.89453125" y2="0" strokeDasharray="0" strokeWidth="0" strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden">
                          </line>
                          <g id="SvgjsG1349" className="apexcharts-xaxis" transform="translate(0, 0)">
                            <g id="SvgjsG1350" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1352" fontFamily="Helvetica, Arial, sans-serif" x="0" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                              <tspan id="SvgjsTspan1353">SUN</tspan>
                              <title>SUN</title>
                            </text>
                              <text id="SvgjsText1355" fontFamily="Helvetica, Arial, sans-serif" x="155.64908854166669" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                <tspan id="SvgjsTspan1356">MON</tspan>
                                <title>MON</title>
                              </text>
                              <text id="SvgjsText1358" fontFamily="Helvetica, Arial, sans-serif" x="311.2981770833333" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                <tspan id="SvgjsTspan1359">TUE</tspan>
                                <title>TUE</title>
                              </text>
                              <text id="SvgjsText1361" fontFamily="Helvetica, Arial, sans-serif" x="466.94726562499994" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                <tspan id="SvgjsTspan1362">WED</tspan>
                                <title>WED</title>
                              </text>
                              <text id="SvgjsText1364" fontFamily="Helvetica, Arial, sans-serif" x="622.5963541666665" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                <tspan id="SvgjsTspan1365">THU</tspan>
                                <title>THU</title>
                              </text>
                              <text id="SvgjsText1367" fontFamily="Helvetica, Arial, sans-serif" x="778.2454427083331" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                <tspan id="SvgjsTspan1368">FRI</tspan>
                                <title>FRI</title>
                              </text>
                              <text id="SvgjsText1370" fontFamily="Helvetica, Arial, sans-serif" x="933.8945312499998" y="293.348" textAnchor="middle" dominantBaseline="auto" fontSize="12px" fontWeight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                                <tspan id="SvgjsTspan1371">SAT</tspan>
                                <title>SAT</title>
                              </text>
                            </g></g>
                          <g id="SvgjsG1408" className="apexcharts-yaxis-annotations"></g>
                          <g id="SvgjsG1409" className="apexcharts-xaxis-annotations"></g>
                          <g id="SvgjsG1410" className="apexcharts-point-annotations"></g>
                          <rect id="SvgjsRect1413" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fefefe" className="apexcharts-zoom-rect">
                          </rect>
                          <rect id="SvgjsRect1414" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fefefe" className="apexcharts-selection-rect">
                          </rect>
                        </g>
                      </svg>

                    </div>
                  </div>
                </div>
              </div>


              <div className="apexcharts-tooltip apexcharts-theme-light">
                <div className="apexcharts-tooltip-title" style={{ fontFamily: "Helvetica, Arial, sans-serif; fontSize: 12px" }}>
                </div>
                <div className="apexcharts-tooltip-series-group" style={{ order: "1" }}>
                  <span className="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(142, 133, 230)" }}></span>
                  <div className="apexcharts-tooltip-text" style={{ fontFamily: "Helvetica, Arial, sans-serif; fontSize: 12px" }}>
                    <div className="apexcharts-tooltip-y-group">
                      <span className="apexcharts-tooltip-text-y-label"></span>
                      <span className="apexcharts-tooltip-text-y-value"></span>
                    </div>
                    <div className="apexcharts-tooltip-goals-group">
                      <span className="apexcharts-tooltip-text-goals-label"></span>
                      <span className="apexcharts-tooltip-text-goals-value"></span>
                    </div>
                    <div className="apexcharts-tooltip-z-group">
                      <span className="apexcharts-tooltip-text-z-label"></span>
                      <span className="apexcharts-tooltip-text-z-value"></span>
                    </div>
                  </div>
                </div>
                <div className="apexcharts-tooltip-series-group" style={{ order: "2" }}>
                  <span className="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(23, 162, 184)" }}></span>
                  <div className="apexcharts-tooltip-text" style={{ fontFamily: "Helvetica, Arial, sans-serif; fontSize: 12px" }}>
                    <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label">
                    </span>
                      <span className="apexcharts-tooltip-text-y-value"></span>
                    </div>
                    <div className="apexcharts-tooltip-goals-group">
                      <span className="apexcharts-tooltip-text-goals-label">
                      </span>
                      <span className="apexcharts-tooltip-text-goals-value"></span>
                    </div>
                    <div className="apexcharts-tooltip-z-group">
                      <span className="apexcharts-tooltip-text-z-label"></span>
                      <span className="apexcharts-tooltip-text-z-value"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                <div className="apexcharts-xaxistooltip-text" style={{ fontFamily: "Helvetica, Arial, sans-serif; fontSize: 12px" }}>
                </div>
              </div>
              <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                <div className="apexcharts-yaxistooltip-text">
                </div>
              </div>
              <div className="apexcharts-toolbar" style={{ top: "0px", right: "3px" }}>
                <div className="apexcharts-zoomin-icon" title="Zoom In">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                  </svg>
                </div><div className="apexcharts-zoomout-icon" title="Zoom Out"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
                </div><div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
                </svg>
                </div>
                <div className="apexcharts-pan-icon" title="Panning">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                    <defs>
                      <path d="M0 0h24v24H0z" id="a"></path>
                    </defs>
                    <clipPath id="b">
                      <use overflow="visible" xlinkHref="#a"></use>
                    </clipPath>
                    <path clipPath="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
                  </svg></div><div className="apexcharts-reset-icon" title="Reset Zoom"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                </div>
                <div className="apexcharts-menu-icon" title="Menu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                  </svg>
                </div>
                <div className="apexcharts-menu">
                  <div className="apexcharts-menu-item exportSVG" title="Download SVG">Download SVG</div>
                  <div className="apexcharts-menu-item exportPNG" title="Download PNG">Download PNG</div>
                  <div className="apexcharts-menu-item exportCSV" title="Download CSV">Download CSV</div>
                </div>
              </div>
            </div>
          </div>
        
        </>
    );
};