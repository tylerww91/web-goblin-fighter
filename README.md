## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

## HTML

1. im going to need 3 main containers

-   1 that is just a battle log that displays the damage dealt to the opponent and the user
-   1 that holds a scoreboard to keeps track of the user's HP, and stars gained for defeating enemies. As well as the user sprite/img (Mario)
-   The last container will hold the input/button that add opponents, the opponents themselves and the remove dead opponents button

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

[wireframe](https://whimsical.com/web-goblin-fighter-copy-QVyCxijrqo9EPuqCq9vbpa)

image sources:

tombstone - https://www.flaticon.com/free-icon/tombstone_218207?term=tombstone&page=1&position=16&page=1&position=16&related_id=218207&origin=search

paper background - https://www.freepik.com/free-photo/design-space-paper-textured-background_3220799.htm#query=paper%20background&position=0&from_view=keyword

bowser sprite - https://www.spriters-resource.com/resources/sheets/81/84243.png?updated=1476452529

rex - https://www.spriters-resource.com/fullview/104404/

mario - https://www.pngwing.com/en/free-png-nfyok

goombella - https://www.nicepng.com/png/detail/223-2238709_blizz-the-mizzter-blizzard-paper-mario-goombella-sprites.png

enemy sprites - https://www.pinterest.com/pin/754071531333869499/?nic_v3=1a52wbu7M
