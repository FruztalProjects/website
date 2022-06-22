import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r,c as l,a as e,b as a,w as d,F as h,d as i,e as o,o as c}from"./app.3ae82406.js";var u="/assets/frija-dark.c6b0d0ed.png",p="/assets/frija-light.ee31766e.png",f="/assets/files-dark.05f22bd0.png",m="/assets/files-light.a3ab85a8.png",w="/assets/odinpreview.e71a83a9.png",y="/assets/downloadmode.d08b5a6e.png";const g={},b=i('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>If you\u2019re here, you\u2019re probably looking to flash a firmware for your phone! No need to worry if you have no experience flashing firmware, it isn\u2019t too complicated. With experience in this process, I will try my best to explain how to do this in the most simple way possible. If you\u2019ve never done this before, I recommend reviewing this guide multiple times to get a better grasp of what to do and reduce your chances of user error. I am not responsible for any potential damage to your device (in the worst case, your device gets soft bricked, which is fixable via this process anyway!)</p><h3 id="why-flash-a-different-firmware" tabindex="-1"><a class="header-anchor" href="#why-flash-a-different-firmware" aria-hidden="true">#</a> Why flash a different firmware?</h3><p>There are plenty of reasons why you should consider flashing a different firmware. Some reasons are, but not limited to:</p><ul><li><p>Issues with your current version (battery drain, overheating, etc.) that a factory reset may not always resolve.</p></li><li><p>Getting rid of carrier bloatware and apps (This applies mostly to US models, which usually come preinstalled with carrier apps and bloatware that usually can\u2019t be completely disabled or uninstalled. However, I can\u2019t speak for regions with Exynos and other Snapdragon models regarding bloatware.</p></li><li><p>Untimely software updates (Some regions and countries are more susceptible to this, as security patches may be late or delayed by weeks or even months. Have you seen others with the same phone as you getting updates before you? This is the reason why. There is a lot of variability in how updates are rolled out and Samsung\u2019s update schedule isn\u2019t always consistent.)</p></li><li><p>A different region received a major update quicker.</p></li></ul><h3 id="what-are-my-options" tabindex="-1"><a class="header-anchor" href="#what-are-my-options" aria-hidden="true">#</a> What are my options?</h3><p>If you are in the United States, flashing the US unlocked firmware is your best bet. Free of any carrier bloatware and branding, this one brings the most \u201Cstock\u201D Samsung experience for your device and is virtually compatible with any carrier. An exception I have seen is where AT&amp;T may not fully support features such as VoLTE and WiFi calling on unlocked firmware or phones for whatever reason. To further emphasize AT&amp;T\u2019s questionable business practices, they also do not release their firmware which makes getting their branded firmware and devices the only way to get full access to their features. A potential (but not super concerning) con to US unlocked firmware is that software updates may be a little late compared to the carrier counterparts, but usually only by a few days or a week at worst. As of writing this report, unlocked models have beaten most carriers to the One UI 3.0 (Android 11) update. However, you don\u2019t have to flash unlocked firmware, but I highly recommend doing so as it brings the cleanest software. You can also flash another carrier\u2019s firmware. For example, if you have a T-Mobile phone but your carrier is Verizon, you may want Verizon firmware instead to get a better experience on their network. So in short, your options are US unlocked firmware or your provider\u2019s firmware.</p><p>If you are in another region (e.g., Europe, Africa, Latin America) it gets a little more complicated. These regions and countries typically have Samsung\u2019s own Exynos chip, which gives you a lot more flexibility in choosing a firmware. I will narrow it down later in explaining CSCs.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>There are a few things you will need in order to flash firmware. In short, you will need:</p>',10),v=e("li",null,"A PC or laptop running Windows",-1),_=e("li",null,"A reliable USB Cable that handles transferring data (most)",-1),S=o("A few programs "),k={href:"https://github.com/SlackingVeteran/frija-dev/releases/latest",target:"_blank",rel:"noopener noreferrer"},C=o("Frija"),x=o(" (Windows app)"),A={href:"https://samfw.com/",target:"_blank",rel:"noopener noreferrer"},I=o("Samfw"),T=o(" (Website, note: use Direct Download or Download On Website only)"),U={href:"https://forum.xda-developers.com/t/patched-odin-3-13-1.3762572/",target:"_blank",rel:"noopener noreferrer"},F=o("Odin Patched 3.14.1"),D=i('<h3 id="using-and-understanding-your-downloads" tabindex="-1"><a class="header-anchor" href="#using-and-understanding-your-downloads" aria-hidden="true">#</a> Using (and Understanding) Your Downloads</h3><p>After downloading the corresponding programs, there will be a few simple concepts you will need to understand, starting with Frija.</p><p><img src="'+u+'" alt="Frija Preview" data-mode="darkmode-only"><img src="'+p+'" alt="Frija Preview" data-mode="lightmode-only"></p><div class="custom-container info"><p class="custom-container-title">Info</p><p>Frija downloads the latest available firmware for your device, so if you wish to downgrade, you would need to use SamFW; Please remember to only use the Direct Download option as the Google Drive option is not recommended by me for specific reasons.</p></div><ul><li><p><strong>Model</strong>: This is the model number of your device. As shown in the image, I have the model number of a US unlocked Galaxy Note 9 (N960U1). Here, you will input the model number of the firmware you want to download (or the one you currently have). Model numbers can be found in your device\u2019s settings in case you don\u2019t know yours (for example, the US unlocked model number ends with a U1, compared to a U for carrier models).</p></li><li><p><strong>CSC</strong>: Here it gets a little more complicated. CSC refers to the country specific code which is a component of firmware binaries that contain customized settings, system configurations, and regional things such as APN settings. For the US they are pretty straightforward, but for other regions there are an abundance of CSCs.</p></li></ul><p>CSCs in the US (a few examples): USC (US Cellular), VZW (Verizon), TMB (T-Mobile), XAA (unlocked). You will need the corresponding CSC when you download firmware (even if you flash a firmware with the incorrect one, your SIM card will adjust it accordingly). CSCs elsewhere: A country may have its own CSC, alongside carrier CSCs as well. An example (Germany in this case): DBT (unlocked), DTM (T-Mobile), and VD2 (Vodafone). I chose Germany as an example, as updates there are typically released first before anywhere else. A more comprehensive CSC list can be found here</p><p>Once you have entered your corresponding model number and CSC, press \u201CCheck Update\u201D to retrieve the latest firmware version available and download it. Once the download is complete (do not close Frija until it is done decrypting), unzip the folder and you should see 5 files in the unzipped folder, as shown below:</p><p><img src="'+f+'" alt="Folder content preview" data-mode="darkmode-only"><img src="'+m+'" alt="Folder content preview" data-mode="lightmode-only"></p><p>These files will then be used in the flashing process accordingly</p><h3 id="flashing-process" tabindex="-1"><a class="header-anchor" href="#flashing-process" aria-hidden="true">#</a> Flashing Process</h3><p>Once you have the files, you\u2019re ready to flash the firmware! Open up Odin and you will be greeted with this page.</p><p><img src="'+w+'" alt="Odin Preview"></p><p>Then, you will need to put your phone in download mode. This may vary by model, but on the S20 (for example), you can enter download mode through powering off your phone, then by pressing and holding both volume buttons when it\u2019s off. I recommend searching how to boot into download mode (e.g., Galaxy S10 download mode) if you have another device. Regardless, you should see this screen if you do it correctly (then press volume up to get to the second screen).</p><p><img src="'+y+'" alt="Download Mode Preview"></p><ul><li><p>Now plug in your phone. Odin will recognize that a device has been connected and should show up on the screen. As shown above in the Odin screenshot, there are 5 boxes where you will place the firmware files you downloaded previously (BL, AP, CP, and CSC; USERDATA will not be used). Click on each name and select the corresponding file (e.g., BL file goes into the BL slot, CP file into CP slot, and so on). Your computer may hang when doing the AP file (it\u2019s a big file), but be patient and let it continue. Now, regarding CSC, you will have two options. The CSC file will wipe your device, while the HOME_CSC file will keep all your data intact. You can choose whatever is best for you, but I recommend wiping and flashing a clean install (<strong>regardless, backup your data beforehand</strong>). Now that all your files are placed, click the \u201CStart\u201D button to begin flashing.</p></li><li><p>If the flashing is successful, you will get a \u201CPASS!\u201D at the end. If you get a FAIL, it could be for various reasons such as firmware incompatibility, missing USB drivers, and vice versa. I recommend looking at this for more detail.</p></li><li><p>And that\u2019s it! If all went well, you should be running the most up to date firmware on your device. Note that this guide outlined how to flash the latest version firmware available.</p></li></ul><h3 id="downgrading" tabindex="-1"><a class="header-anchor" href="#downgrading" aria-hidden="true">#</a> Downgrading</h3>',16),P=o("Downgrading is also possible, given that the version you are trying to flash is on the same binary version as the current firmware on your device, there are multiple ways to find your binary version, "),N=o("check out this guide to see every possible way to find your binary version."),O=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"Warning"),e("p",null,"Do not attempt to flash firmware on a lower binary version as the result is always unsuccessful, and it may softbrick your device.")],-1);function V(j,W){const t=r("ExternalLinkIcon"),n=r("RouterLink");return c(),l(h,null,[b,e("ul",null,[v,_,e("li",null,[S,e("ul",null,[e("li",null,[e("a",k,[C,a(t)]),x]),e("li",null,[e("a",A,[I,a(t)]),T]),e("li",null,[e("a",U,[F,a(t)])])])])]),D,e("p",null,[P,a(n,{to:"/guide/binary.html"},{default:d(()=>[N]),_:1})]),O],64)}var M=s(g,[["render",V],["__file","firmware.html.vue"]]);export{M as default};
