jQuery((function(e){let t="";e.ajax({type:"GET",dataType:"json",url:addresswise_ajax.ajax_url,data:{action:"get_client_token",nonce:addresswise_ajax.nonce},success:function(o){o&&o.client_token?(t=o.client_token,function(){let o;n.addEventListener("input",(function(){clearTimeout(o);const l=e(this).val().trim();if(l.length>=4){const d=function(e){var n=jQuery("#billing_country").val();return"NZ"===n?"  https://api.addresswise.co.nz/api/address-suggestions?client_token="+t+"&q="+encodeURIComponent(e)+"&country=NZ":"  https://api.addresswise.co.nz/api/address-suggestions?client_token="+t+"&q="+encodeURIComponent(e)+"&country="+n}(l);s(),o=setTimeout((function(){e.ajax({type:"GET",dataType:"json",url:d,headers:{"ngrok-skip-browser-warning":!0,"Access-Control-Allow-Origin":!0},success:function(s){s.success&&function(s){let o=document.getElementById("dropdown-list");if(o)if(o){o.remove(),o=document.createElement("ul"),o.id="dropdown-list",o.className="dropdown";document.getElementById("billing_address_1").insertAdjacentElement("afterend",o)}else o.innerHTML="";else{o=document.createElement("ul"),o.id="dropdown-list",o.className="dropdown";document.getElementById("billing_address_1").insertAdjacentElement("afterend",o)}if(function(){const e=n.getBoundingClientRect(),t=20;let s=document.getElementById("dropdown-list");if(s){n.style.position="static",s.style.position="relative";e.bottom;s.style.margin=0,s.style.listStyle="none",s.style.width=`${e.width}px`,s.style.paddingLeft=0}else console.error("Element with id 'dropdown-list' not found.")}(),s&&s.length>0)s.forEach((n=>{const s=document.createElement("li");s.textContent=n.full_address,s.addEventListener("click",(function(){!function(n){const s=function(e){var n=jQuery("#billing_country").val();return"NZ"===n?"  https://api.addresswise.co.nz/api/getFullAddress?client_tokens="+t+"&addressId="+e+"&country=NZ":"  https://api.addresswise.co.nz/api/getFullAddress?client_tokens="+t+"&addressId="+e+"&country="+n}(n);e.ajax({type:"GET",dataType:"json",url:s,headers:{"ngrok-skip-browser-warning":!0,"Access-Control-Allow-Origin":!0},success:function(e){if("NZ"===jQuery("#billing_country").val()){const t=e.address.city||"",n=e.address.postcode||"";document.getElementById("billing_city").value=t,document.getElementById("billing_postcode").value=n}else{const t=e.result.address_components.find((e=>e.types.includes("locality")))?.long_name||"",n=e.result.address_components.find((e=>e.types.includes("postal_code")))?.long_name||"",s=e.result.address_components.find((e=>e.types.includes("administrative_area_level_1")))?.short_name||"";!function(e){const t=document.getElementsByClassName("state_select")[0];if(t){for(const n of t.options)n.value===e&&(n.selected=!0);const n=new Event("change",{bubbles:!0});t.dispatchEvent(n)}else console.error("Element with class 'state_select' not found.")}(s),document.getElementById("billing_city").value=t,document.getElementById("billing_postcode").value=n,document.getElementById("billing_state").option.value=s}},error:function(e,t,n){console.error(n)}})}(n.address_id),document.getElementById("billing_address_1").value=n.full_address.split(", ")[0],o.style.display="none"})),o.appendChild(s)}));else{const e=document.createElement("li");e.textContent="No suggestions found",o.appendChild(e)}}(s.addresses)},error:function(e,t,n){console.error(n)}})}),1e3)}else if(0===l.length){s();let e=document.getElementById("dropdown-list");e&&(e.innerHTML="")}}))}()):console.error("Client token not found in response.")}});const n=document.getElementById("billing_address_1");function s(){document.getElementById("billing_city").value="",document.getElementById("billing_postcode").value=""}n.setAttribute("autocomplete","off"),document.addEventListener("click",(function(e){const t=e.target;t.matches(".search-container")||t.matches("#dropdown-list li")||(document.getElementById("dropdown-list").style.display="none")}))}));