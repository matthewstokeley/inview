

export default class Scroller {

  constructor() {
    
      this.init().listen(); 
    
  }


  /**
   * @chainable
   * @return {Object}
   */
  init() {
    
      this.isScroller = false;
      this.pos = 0;
      return this;
    
  };

  /**
   * @todo debounce or throttle
   * @return {null}
   */
  listen() {
      window.addEventListener( 'scroll', function( e ) {
          this.pos = window.scrollY;
          this.emit();
        
      }.bind( this ) );
    
    return null
      
  };

  /**
   * 
   * @return {null}
   */
  emit() {
    
      events.emit('scroll', null, this.pos);
    
      return null
  
  }

}
