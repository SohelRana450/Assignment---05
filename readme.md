Question - 01{
    *getElementById,getElementsByClassName, and querySelector / querySelectorAll
✅ getElementById() --> To access a specific, uniquely identified element.
✅ getElementsByClassName() --> To return multiple elements might belong to the same group
✅ querySelector() --> To target a single, specific element (an element with a unique ID)
✅ querySelectorAll() --> To target multiple elements and to share all matching elements (Nodelist)
}
Question - 02{
    *create and insert a new element into the DOM?
✅ .createElement() -->Creating the element into the DOM.
✅ .appendChild() -->Inserting the element into the DOM.
}
Question - 03(
    * Event Bubbling and works
✅ Even if the event occurs on a child element, it also reaches the parent elements.
)
Question - 04
(  *Event Delegation
✅ Due to event bubbling, the event propagates from the child to the parent.
✅ The parent's event listener can catch the event.
✅ You can then use event.target to find out which child element the event occurred on.
  
  *Why is it useful
✅ Performance Boost → Even if there are many child elements, you only need to add a listener to the parent once.
✅ Dynamic Elements Handle → Even if a new child element is added, no extra listener is needed.
✅ Clean & Maintainable Code → The code is smaller and simpler.
)
Question - 05 (
    *preventDefault()
  ✅ This method is used to stop the default action associated with a specific event.
    *stopPropagation()
  ✅  To stop event bubbling we can use the stopPropagation() method.
)