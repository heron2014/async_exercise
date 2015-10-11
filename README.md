# async_exercise
Practising of asynchronous programming in [Nodejs](https://nodejs.org/en/)


# What is 01_exercise?
This exercise aim is to show callback patterns, chaining calls, avoiding callback hell and handling error.

#### 01_read_file.js
Is a simple exercise to read content file using async programming.

Run this exercise by typing:
```node 01_read_file.js ```

#### 02_mkdir_read_write.js
This exercise aim is to practise the callback pattern and chaining calls.

Run this exercise by typing:
```node 02_mkdir_read_write.js ```
To run again this exercise , remember to remove ```temp``` directory by typing:
``` rm -rf temp```

#### 03_refactor02.js
This exercise shows how to escape callback hell.

#### 04_error_handling.js
This exercise shows how to generalizing error handling.

To run above two exercises, the same rule applies as to exercise 02.

# What is 02_exercise?
This exercise aim is to analyze how we can manage operations that happens in parallel.

#### 01_operations.js
Coordinating parallel operations (None of these operations depends on previous one)

#### client01.js
client01.js invokes our module 01_operations.js

Run this example by typing: 
```node client01.js ```

#### 02_operations.js
Paralallising the calls (make them depend on previous one). Call1, call2, call3 might finish on different time but what 
we want is to return arguments in order the way they are invoked.





# Further reading/watching
[NodeTuts Tutorial](http://nodetuts.com/series/asynchronous-programming/mastering-asynchronous-programming-02.html)
