

export default class ViewportNotifier {

    constructor(options) {
        /**
         * 
         * @type {Element]}
         */
        this.el = options.el;

        /**
         * 
         * @type {Object}
         */
        this.scroller = options.scroller;

        /**
         * 
         * @type {String}
         */
        this.id = this.section.id;

        /**
         * 
         */
        this.init().listen();

    }


    /**
     * @chainable
     * @return {Object}
     */
    init() {

        this.viewport = {
          "w": Math.max( document.documentElement.clientWidth, window.innerWidth || 0 ),
          "h": Math.max( document.documentElement.clientHeight, window.innerHeight || 0 )
        };

        this.offset = this.section.offsetTop - ( this.viewport.h / 2 );
        this.top = this.section.offsetTop - 50;
        this.height = this.section.offsetHeight;
        this.offsetEnd = this.offset + this.height;
        this.end = this.top + this.height;
        this.isInView = false;
        this.isView = false;

        return this;

    };

    /**
     * 
     * @chainable
     * @return {Object}
     */
    listen() {

        events.register( 'scroll', function( pos ) {
            this.findView( pos );
        }.bind( this ) );

        window.addEventListener( 'resize', function() {
            this.init();
        }.bind( this ) );

        return this;

    };


    /**
     * 
     * @return {String|Number}
     */
    getId() {
      return this.id;
    }

    /**
     * 
     * @chainable
     * @param  {Number}      position
     * @return {Object}
     */
    findView(pos) {

      if ( pos > this.offset && pos < this.offsetEnd && this.isInView === false ) {
        this.elIsInView()  
      }

      if ( ( pos < this.offset || pos > this.offsetEnd + ( this.height /2 ) ) && this.isInView === true ) {
          this.elIsNotInView();
      }

      return this;

    };


    /**
     *  @return {null}
     */
    elIsInView() {
      
          events.emit( this.id + '-inview', null, true );
          this.isInView = true; 
         
          return null;
        
    };

    /**
     * @return {null}
     */
    elIsNotInView() { 

        events.emit( this.id + '-not-inview', null, false );
        this.isInView = false;

        return null;

    };


}
