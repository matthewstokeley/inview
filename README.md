## js-interactions-inview

0.0.3

An IE-friendly alternative to the `InteractionObserverAPI` - receive an event notification if an element enters into the viewport.

@todo threshold

This is an `es6` compatible version of an earlier library, hosted [here](https://bitbucket.org/matthewjaestokeley/js-interactions/src/master/)

### Example

```

<section id="footer">
    footer
</section>

...

var notifier = new ViewportNotifier(
	{
		el: document.querySelector('#footer'),
		scroller: new Scroller()
	});

// register events
events.register('footer-in-view', fn);
events.register('footer-not-in-view', fn);


```


### API Documentation

```
ViewportNotifier
```


The contructor accepts an `options` object with two properties, the 'el' - that is, the element - and an instance of the `Scroller` class, which just emits an event on the `window` `onscroll` event. 


`el` - an element that requires viewport notification

`scroller` - an instance of the `Scroller` class.


### Event Documentation

Two events are emitted.

```
#{section}-in-view
```

The section `id` plus the string `-in-view` is emitted with a response of type `boolean` indicating if the `el` is in view.

---


```
#{section}-not-inview;
```

The section `id` plus the string `-not-in-view` is emitted with a response of type `boolean` indicating if the `el` is in view.

```