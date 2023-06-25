class Accordion {
    constructor(parent, item, trigger) {
        this.DOM = {};
        this.DOM.acSingle = document.querySelector(parent);
        this.DOM.items = this.DOM.acSingle.querySelectorAll(item);
        this.DOM.acSingleTriggers = this.DOM.acSingle.querySelectorAll(trigger);
        this._addEvent();
        //最初の要素を開かないなら削除
        this._firstOpen();
    }

    _firstOpen() {
        this.DOM.acSingle.firstElementChild.classList.add('is-open');
    }
    
    // タイトル部分にクリックイベントを追加
    _addEvent() {
        this.DOM.acSingleTriggers.forEach(trigger => trigger.addEventListener('click', this._toggleAccordion.bind(this)));
    }

    //タイトルがクリックされた際の親要素を取得し、条件分岐でその要素にis-openクラスを付与or除去
    _toggleAccordion(e) {
        const parentItem = e.target.parentNode;

        this.DOM.items.forEach(item =>{
            if (parentItem == item){
                parentItem.classList.toggle('is-open');
            }else{
                item.classList.remove('is-open');
            }
        });
    }
}


// this.DOM.items.forEach(item => item.classList.toggle('is-open'));


// console.log(e.target.parentNode)

  
    //     this.items.forEach(item => {
    //       if (thisItem == item) {
    //         thisItem.classList.toggle('is-open');
    //         return;
    //       }
    //       item.classList.remove('is-open');
    //     });