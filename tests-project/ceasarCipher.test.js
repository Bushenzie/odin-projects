const Cipher = require("./ceaserCipher");

test("Classic shift by 1",()=> {
    expect(Cipher("ABC",1)).toEqual("BCD");
})

test("Classic shift by 3",()=> {
    expect(Cipher("ABC",3)).toEqual("DEF");
})

test("Classic shift backwards by 1",()=> {
    expect(Cipher("ABC",-1)).toEqual("ZAB");
})

test("Shift over Z",()=> {
    expect(Cipher("zzZz",1)).toEqual("aaAa");
})

test("Shift back from A",()=> {
    expect(Cipher("aAa",-1)).toEqual("zZz");
})


test("Random text by 1",()=> {
    expect(Cipher("defend the east wall of the castle",1)).toEqual("efgfoe uif fbtu xbmm pg uif dbtumf");
})

test("Random text by -7",()=> {
    expect(Cipher("Qbqbazb Rhpzlu pz tpk huptl uns ,sprl iyv ek",-7)).toEqual("Jujutsu Kaisen is mid anime ngl ,like bro xd");
})