## js-interactions-inview

0.0.3

An IE-friendly alternative to the `InteractionObserverAPI` - receive an event notification if an element enters into the viewport.

### Dependencies

- `Scroller`

A simple class for handling `onscroll` events.

- `events`

An object that implements a `pubsub` pattern. 

### Example

```

<footer id="footer">
    ...
</footer>

...

var notifier = new ViewportNotifier({
    el: document.querySelector('#footer'),
    scroller: new Scroller()
});

var fn = (res) => { console.log(res) }

// register events
events.register('footer-in-view', fn);
events.register('footer-not-in-view', fn);

```


### API Documentation

```
ViewportNotifier
```

The constructor accepts an `options` object with two properties, `el` and an instance of the `Scroller` class, which just emits an event on the `window` `onscroll` event and provides the option to include methods for debouncing scroll events. 


`el` - an element that requires viewport notification

`scroller` - an instance of the `Scroller` class. 


### Event Documentation

Two events are emitted.

```
#{section}-in-view
```

When the section enters the viewport, the section `id` plus the string `-in-view` is emitted.

---


```
#{section}-not-inview;
```

When the section leaves the viewport, the section `id` plus the string `-not-in-view` is emitted.

