let cart=[]; let demoStep=0;
function money(n){return "฿"+n.toLocaleString("en-US")}
function addToCart(name,price){cart.push({name,price});document.getElementById("cartCount").textContent=cart.length;showToast(name+" added to cart");}
function openCart(){document.getElementById("cartModal").classList.remove("hidden");renderCart()}
function closeCart(){document.getElementById("cartModal").classList.add("hidden")}
function renderCart(){let box=document.getElementById("cartItems"),total=cart.reduce((s,x)=>s+x.price,0);box.innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><span>${i+1}. ${x.name}</span><b>${money(x.price)}</b></div>`).join(""):`<p style="color:#73839a">Your demo cart is empty.</p>`;document.getElementById("cartTotal").textContent=money(total)}
function checkout(){if(!cart.length){showToast("Add a product first.");return}showToast("Demo order created — no real payment is charged.");closeCart()}
function showToast(t){let el=document.getElementById("toast");el.textContent=t;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),2400)}
function showDemo(){document.getElementById("demoModal").classList.remove("hidden");demoStep=0;resetDemo()}
function hideDemo(){document.getElementById("demoModal").classList.add("hidden")}
function resetDemo(){let b=document.getElementById("demoBottle");b.classList.remove("collapsed","swapped");document.getElementById("demoAction").textContent="Collapse Bottle";document.getElementById("demoText").textContent="Click the button to demonstrate the product concept."}
function runDemoStep(){let b=document.getElementById("demoBottle"),btn=document.getElementById("demoAction"),txt=document.getElementById("demoText");demoStep++;if(demoStep===1){b.classList.add("collapsed");btn.textContent="Twist Base";txt.textContent="The collapsible body reduces the bottle's storage footprint."}else if(demoStep===2){btn.textContent="Swap Power Module";txt.textContent="Twist the folded section left or right to unlock the base."}else if(demoStep===3){b.classList.add("swapped");btn.textContent="Demo Complete ✓";txt.textContent="The Power Bank module is now attached. Reset and show it again to your teacher."}else{demoStep=0;resetDemo()}}
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}
