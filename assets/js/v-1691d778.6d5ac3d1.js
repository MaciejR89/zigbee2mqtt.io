"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8633],{56328:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-1691d778",path:"/devices/SNZB-02.html",title:"SONOFF SNZB-02 control via MQTT",lang:"en-US",frontmatter:{title:"SONOFF SNZB-02 control via MQTT",description:"Integrate your SONOFF SNZB-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-07-10T21:03:07.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Reporting intervals",slug:"reporting-intervals",children:[]},{level:3,title:"Battery",slug:"battery",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SNZB-02.md",git:{updatedTime:1639070261e3}}},55405:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var a=i(66252);const r=(0,a.uE)('<h1 id="sonoff-snzb-02" tabindex="-1"><a class="header-anchor" href="#sonoff-snzb-02" aria-hidden="true">#</a> SONOFF SNZB-02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SNZB-02</td></tr><tr><td>Vendor</td><td>SONOFF</td></tr><tr><td>Description</td><td>Temperature and humidity sensor</td></tr><tr><td>Exposes</td><td>battery, temperature, humidity, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SNZB-02.jpg" alt="SONOFF SNZB-02"></td></tr><tr><td>White-label</td><td>eWeLink RHK08</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode</p><h3 id="reporting-intervals" tabindex="-1"><a class="header-anchor" href="#reporting-intervals" aria-hidden="true">#</a> Reporting intervals</h3>',6),o=(0,a.Uk)("It has been reported, that the sensor reports humidity changes quite frequently (changes on 2nd digit level), but temperature changes are reported only once per hour or when temperature has changed > ~0.6°C. This results in a "),n=(0,a._)("em",null,"staircase",-1),d=(0,a.Uk)(" development in recorded temperatures and inhibits fine-granular climate control. No resolution is known so far. See also "),s={href:"https://community.home-assistant.io/t/sonoff-snzb-02-temp-sensor-reporting-interval/216315/7",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("Homeassistant Community Forums"),u=(0,a._)("h3",{id:"battery",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#battery","aria-hidden":"true"},"#"),(0,a.Uk)(" Battery")],-1),c=(0,a._)("p",null,"Uses a CR2450 battery",-1),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),m=(0,a.Uk)("How to use device type specific configuration"),p=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),f={},b=(0,i(83744).Z)(f,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),f=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[o,n,d,(0,a._)("a",s,[l,(0,a.Wm)(i)])]),u,c,h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(f,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[m])),_:1})])]),p],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);