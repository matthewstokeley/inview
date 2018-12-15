

export default class ViewportNotifier {

    constructor(options) {
        /**
         * [section description]
         * @type {Element]}
         */
        this.el = options.el;

        /**
         * [scroller description]
         * @type {Object}
         */
        this.scroller = options.scroller;

        /**
         * [id description]
         * @type {String}
         */
        this.id = this.section.id;

        /**
         * 
         */
        this.init().listen();

    }


    /**
     * [init description]
     * @return {[type]} [description]
     */
    init() {

        this.viewport = {
          "w": Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
          "h": Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        };

        this.offset = this.section.offsetTop - (this.viewport.h / 2);
        this.top = this.section.offsetTop - 50;
        this.height = this.section.offsetHeight;
        this.offsetEnd = this.offset + this.height;
        this.end = this.top + this.height;
        this.isInView = false;
        this.isView = false;

        return this;

    };

    /**
     * [listen description]
     * @return {[type]} [description]
     */
    listen() {

        events.register('scroll', function(pos) {
            this.findView(pos);
        }.bind(this));

        window.addEventListener('resize', function() {
            this.init();
        }.bind(this));

        return this;

    };


    /**
     * [getId description]
     * @return {String} [description]
     */
    getId() {
      return this.id;
    }

    /**
     * [findView description]
     * @chainable
     * @param  {Int} pos [description]
     * @return {Object}     [description]
     */
    findView(pos) {

      if (pos > this.offset && pos < this.offsetEnd && this.isInView === false) {
        this.elIsInView()  
      }

      if ((pos < this.offset || pos > this.offsetEnd + (this.height /2)) && this.isInView === true) {
          this.elIsNotInView();
      }

      return this;

    };


    /**
     * [elIsInView description]
     * @return {[type]} [description]
     */
    elIsInView() {
      
          events.emit(this.id + '-inview', null, true);
          this.isInView = true; 
      

    };

    /*
     * [elIsNotInView description]
     * @return {[type]} [description]
     */
    elIsNotInView() { 


        events.emit(this.id + '-not-inview', null, false);
        this.isInView = false;

    };


}
