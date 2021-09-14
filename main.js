var slider=document.getElementById("myRange") 
var output=document.getElementById('text');

var slider__val=document.getElementById("slider__val")
slider.oninput=function(){
  slider__val.innerHTML=this.value;
  var cutStr=lognTxt.split(" ",this.value);
  cutStr=cutStr.join(" ")
  output.innerHTML=cutStr
  
}





var lognTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quisLorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo facere non quia totam dicta quo aperiam exercitationem corrupti consectetur fuga, tenetur ullam modi ad ex explicabo odio autem provident voluptatum enim dolore ut soluta placeat. Dolore laboriosam ducimus voluptate tenetur aliquid doloribus blanditiis nisi. Nam, porro quod odit atque omnis nisi nesciunt, labore, sed vel quos a sapiente mollitia doloremque. Perferendis soluta voluptas ullam eius aspernatur qui! Repellendus exercitationem cupiditate atque aut nam ratione eveniet alias consequatur earum tenetur veritatis culpa vero amet laboriosam tempore dicta quia, corporis perferendis perspiciatis, molestiae deserunt provident. Nisi deleniti dicta vel magni amet cumque numquam, ullam officia quas beatae fugit molestiae cum suscipit dolorum fuga quos eveniet architecto blanditiis iusto quisquam ad odit voluptas! Tempore voluptatem obcaecati optio iusto beatae odio earum modi repudiandae, aliquam perferendis? Perspiciatis mollitia suscipit quas dignissimos provident nam necessitatibus exercitationem nobis eaque pariatur expedita recusandae amet eos similique totam culpa eum veniam doloremque omnis praesentium, est minus veritatis. Nesciunt tenetur facere consequuntur eos dolor accusantium sunt aut maiores ea repellat amet nostrum quibusdam cumque, ducimus labore illo vero doloribus atque quia, error adipisci cupiditate inventore recusandae. Asperiores, beatae quia ea omnis temporibus molestias consequatur minima deserunt praesentium quibusdam saepe explicabo quos adipisci qui odit! Tempora iste iusto ipsam qui corporis doloremque, veritatis magnam aperiam iure est enim eaque corrupti consequatur necessitatibus atque sit, sint recusandae? Non quam suscipit nemo officiis unde facilis ullam excepturi error. Dignissimos aut, accusantium nihil, ducimus mollitia libero, facilis corrupti doloremque voluptas magnam voluptate numquam eum? Libero sit omnis eius sunt reprehenderit commodi sint incidunt nisi rem ipsum qui, facere, ullam laudantium obcaecati cupiditate exercitationem doloremque. Quibusdam, mollitia? Dolor, error enim quae itaque nisi sapiente vero"