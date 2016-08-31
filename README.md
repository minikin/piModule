### Let's write some code for hardware side!


####

run : `npm i`

start : `nmp start`

### DO NOT RUN : `apt-get dist-upgrade`

### Compile test.cpp

Use `pkg-config --cflags libpcsclite` to get the compile argument.

And  `pkg-config --libs libpcsclite` to get the link argument.

`g++-4.9 -std=c++11 -Wall  -lpcsclite test.cpp -I/usr/include/PCSC -o cardRead `

### Dep

`apt-get install libpcsclite1 pcscd pcsc-tools`

### For make file:

`PCSC_CFLAGS := $(shell pkg-config --cflags libpcsclite)`
`LDLIBS := $(shell pkg-config --libs libpcsclite)`
