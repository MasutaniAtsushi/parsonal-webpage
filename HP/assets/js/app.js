(()=>{
  class Accordion {
      //初期化
      constructor(obj){
          const $elm = document.querySelector(obj.hookName);
          const $trigger = $elm.getElementsByTagName(obj.tagName);
  
          const triggerLen = $trigger.length;
          let index = 0;
          while(index < triggerLen){
              $trigger[index].addEventListener('click',(e)=> this.clickhandler(e));
              index++;
          }
      }
      //クリックしたら実行される処理
      clickhandler (e) {
          e.preventDefault();
          const $target = e.currentTarget;
          const $content = $target.nextElementSibling;
          if($content.style.display === 'block'){
              $content.style.display = 'none';
          } else{$content.style.display = 'block';
  
          };
      };
  }
  
  const fuckingAccordion = new Accordion({
      hookName :'#js-FAQ',
      tagName :'p'
  });
  
  const demoAccordion = new Accordion({
      hookName :'#js-accordion',
      tagName :'a'
  });
  
  const miniAccordion = new Accordion({
      hookName :'#js-accordion-mini',
      tagName :'dt'
  });
  
  const spanAccordion = new Accordion({
      hookName :'#js-accordion-four',
      tagName :'span'
  });
  
  const fiveAccordion = new Accordion({
      hookName :'#js-accordion-five',
      tagName :'i'
  });

  const sixAccordion = new Accordion({
    hookName :'#js-accordion-six',
    tagName :'li'
});
  
  
  
  
  
  
  
  })();