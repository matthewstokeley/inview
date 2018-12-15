

export default class Scroller {

  constructor() {
      this.init().listen();    
  }


  /**
   * [init description]
   * @return {[type]} [description]
   */
  init() {
      this.isScroller = false;
      this.pos = 0;
      return this;
  };

  /**
   * [listen description]
   * @return {[type]} [description]
   */
  listen() {
      window.addEventListener('scroll', function(e) {
          this.pos = window.scrollY;
          this.emit();
      }.bind(this));
      return this;
  };

  /**
   * [requestTick description]
   * @return {[type]} [description]
   */
  emit() {
  
      events.emit('scroll', null, this.pos);
  
  }

}
