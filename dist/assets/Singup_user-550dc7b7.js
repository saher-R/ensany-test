import{h as k,aG as N,r as i,o as c,a as p,b as e,l as a,bg as u,v as U,F as h,s as _,q as m,f as V}from"./index-72606741.js";import"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js";const j={class:"Singup_user"},E={class:"content"},I=e("div",{class:"top"},[e("a",{href:"#"},"Insany global platform"),e("span",null,"Register a new membership with us, it's a simple process.")],-1),L={action:"#",class:"info"},A={class:"img-select"},T=["src"],D=e("label",{for:"file_img"},[e("img",{src:"https://icon-library.com/images/camera-icon-white/camera-icon-white-15.jpg",alt:"",class:"take-a-picture",draggable:"false"})],-1),F={class:"inputs-selects"},B=e("option",{value:"",selected:"",disabled:""},"Choose the type of user:",-1),M=e("option",{value:"type-1"},"111",-1),O=e("option",{value:"type-2"},"222",-1),R=e("option",{value:"type-3"},"333333333333333333333",-1),P=[B,M,O,R],W=e("input",{type:"text",placeholder:"First Name:",required:""},null,-1),G=e("input",{type:"text",placeholder:"Last Name:",required:""},null,-1),H=e("input",{type:"text",placeholder:"Email:",required:""},null,-1),J={class:"phone-nums"},K=e("br",null,null,-1),Q=e("input",{type:"text",placeholder:"Choose a difficult word:",required:""},null,-1),Z=e("input",{type:"text",placeholder:"Confirm password:",required:""},null,-1),z=e("option",{value:"",selected:"",disabled:""},"Choose Country:",-1),X=e("option",{value:"type-1"},"111",-1),Y=e("option",{value:"type-2"},"222",-1),$=e("option",{value:"type-3"},"333333333333333333333",-1),ee=[z,X,Y,$],te=e("option",{value:"",selected:"",disabled:""},"Choose Town:",-1),oe=e("option",{value:"type-1"},"111",-1),se=e("option",{value:"type-2"},"222",-1),ne=e("option",{value:"type-3"},"333333333333333333333",-1),ie=[te,oe,se,ne],le=e("option",{value:"",selected:"",disabled:""},"Are you Company:",-1),ae=e("option",{value:"type-1"},"yes",-1),ue=e("option",{value:"type-2"},"no",-1),re=[le,ae,ue],de={key:0,type:"number",placeholder:"Count Of Emploies:",required:""},ce=m('<option value="" selected disabled>Select Majors:</option><option value="type-1">ssss</option><option value="type-2">ssss</option><option value="type-3">ssss</option><option value="type-4">ssss</option>',5),pe=[ce],_e=e("input",{type:"number",placeholder:"Hours in Week:",required:""},null,-1),ye=e("input",{type:"text",placeholder:"Name of Association:",required:""},null,-1),he=m('<option value="" selected disabled>Type of Association:</option><option value="type-1">ssss</option><option value="type-2">ssss</option><option value="type-3">ssss</option><option value="type-4">ssss</option>',5),me=[he],ve=m('<div class="conditions"><label class="label-condition" for="label-condition"><span><input type="checkbox" id="label-condition" required></span><span> I accept the <a href="#">Terms</a> of Use and confirm that I have read <a href="#">the Privacy Policy</a>. </span></label></div><button type="submit" class="SignUp-btn"> Sign Up </button><p> Are you already a member? <a href="#">click here to singin</a></p><div class="lang-div"><a href="#" class="active">English</a><a href="#">Arabic</a></div>',4),fe=e("div",{class:"bottom"},[V(" use "),e("a",{href:"#"},"Insany global platform")],-1),Se={__name:"Singup_user",setup(be){k(()=>{document.body.style.overflow="hidden",document.querySelector("nav").style.display="none",document.querySelector("footer").style.display="none",document.querySelector(".BeforeFooter").style.display="none"}),N(()=>{document.body.style.overflow="auto",document.querySelector("nav").style.display="block",document.querySelector("footer").style.display="block",document.querySelector(".BeforeFooter").style.display="block"});const r=i(""),v=i(""),f=i(""),y=i(""),b=i(""),g=i(""),d=i({number:void 0,intoNum:void 0,countryData:void 0});k(()=>{const s=document.querySelector(".Singup_user #phone-signup"),t=window.intlTelInput(s,{initialCountry:"auto",geoIpLookup:l=>{fetch("https://ipapi.co/json").then(n=>n.json()).then(n=>{l(n.country_code),setTimeout(()=>{d.value.intoNum=n.country_calling_code,x(),o()},20)}).catch(()=>l("us"))},utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"});function o(){const l=document.querySelector(".Singup_user .iti"),n=document.createElement("span");n.textContent=d.value.intoNum,n.className="intro_num_custom",l.appendChild(n)}function x(){document.querySelectorAll(".Singup_user:has(input#phone-signup) .iti li.iti__country").forEach(l=>{l.addEventListener("click",()=>{document.querySelector(".Singup_user .iti span.intro_num_custom").textContent=l.querySelector(".iti__dial-code").textContent})})}const w=()=>{s.classList.remove("err")};function S(){s.value.trim()&&(t.isValidNumber()?w():s.classList.add("err")),d.value={number:s.value,countryData:t.getSelectedCountryData()}}s.addEventListener("keyup",S),s.addEventListener("countrychange",S)});const q=i("https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=");function C(s){let t=new FileReader;t.onload=function(){let o=t.result;q.value=o},t.readAsDataURL(s.target.files[0])}return(s,t)=>(c(),p("div",j,[e("div",E,[I,e("form",L,[e("div",A,[e("img",{src:q.value,alt:"",class:"current-img"},null,8,T),D,e("input",{type:"file",id:"file_img",onChange:C,required:""},null,32)]),e("div",F,[a(e("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),required:""},P,512),[[u,r.value]]),W,G,H,e("div",J,[a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>d.value.number=o),type:"text",id:"phone-signup",required:""},null,512),[[U,d.value.number]])]),K,Q,Z,a(e("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>v.value=o),required:""},ee,512),[[u,v.value]]),a(e("select",{"onUpdate:modelValue":t[3]||(t[3]=o=>f.value=o),required:""},ie,512),[[u,f.value]]),r.value=="type-1"?(c(),p(h,{key:0},[a(e("select",{"onUpdate:modelValue":t[4]||(t[4]=o=>y.value=o),required:""},re,512),[[u,y.value]]),y.value=="type-1"?(c(),p("input",de)):_("",!0)],64)):_("",!0),r.value=="type-2"?(c(),p(h,{key:1},[a(e("select",{"onUpdate:modelValue":t[5]||(t[5]=o=>b.value=o),required:""},pe,512),[[u,b.value]]),_e],64)):_("",!0),r.value=="type-3"?(c(),p(h,{key:2},[ye,a(e("select",{"onUpdate:modelValue":t[6]||(t[6]=o=>g.value=o),required:""},me,512),[[u,g.value]])],64)):_("",!0)]),ve]),fe])]))}};export{Se as default};