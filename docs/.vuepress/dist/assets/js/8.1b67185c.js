(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{368:function(t,e,a){"use strict";a.r(e);var s=a(44),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Say hello to a new package called "),a("strong",[t._v("voix")]),t._v(" ! "),a("strong",[t._v("'Voix'")]),t._v(" is a french word which stands for 'Voice'. As the name suggest , It generates voice for you. Just you have to pass a piece of text. Thats it! Let's discover the details.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("First of all , we need to install it. Right ? To install it , we need this command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("voix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n")])])]),a("p",[t._v("Now, we are ready to learn it ! Let's go....")]),t._v(" "),a("h1",{attrs:{id:"let-s-jump-into-coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-jump-into-coding"}},[t._v("#")]),t._v(" Let's jump into coding")]),t._v(" "),a("p",[t._v("You know, in python , if we want to use any package, we need to import it , first.")]),t._v(" "),a("p",[t._v("So let's do that!")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" voix\n")])])]),a("p",[t._v("As "),a("strong",[t._v("voix")]),t._v(" has 1 function which is "),a("code",[t._v("speak()")]),t._v(", we can import this function only!")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n")])])]),a("h1",{attrs:{id:"discovering-the-speak-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discovering-the-speak-function"}},[t._v("#")]),t._v(" Discovering the '"),a("code",[t._v("speak()")]),t._v("' function")]),t._v(" "),a("p",[t._v("Ok! We are ready to get started !")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("speak()")]),t._v(" function needs 5 parameters. But 4 of them are optional . We have to pass one parameter to start our work and it is "),a("strong",[t._v("text")]),t._v(".")]),t._v(" "),a("p",[t._v("Let's implement this to the code.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n\nspeak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here we will write the text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Congratulations!")]),t._v(" We have generated our first voice!")]),t._v(" "),a("h2",{attrs:{id:"the-lang-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-lang-parameter"}},[t._v("#")]),t._v(" "),a("strong",[t._v("The Lang Parameter")])]),t._v(" "),a("p",[t._v("You might notice that the voice is generated by an English man. But we don't want it. In this scenario , "),a("strong",[t._v("lang")]),t._v(" parameter comes to play a vital role. We can pass all of these 32 languages listed below as a 'String' . But first let's see the code")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n\nspeak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here we will write the text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#here 'fr' means french")]),t._v("\n")])])]),a("p",[t._v("More specifically, we can write:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n\nspeak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here we will write the text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#here 'fr' means french")]),t._v("\n")])])]),a("p",[t._v("Perfect! Now see if your favorite language is in the list")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Supported Language")]),t._v(" "),a("th",[t._v("Key for writing code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Arabic")]),t._v(" "),a("td",[t._v("ar")])]),t._v(" "),a("tr",[a("td",[t._v("Bengali")]),t._v(" "),a("td",[t._v("bn")])]),t._v(" "),a("tr",[a("td",[t._v("Czech")]),t._v(" "),a("td",[t._v("cs")])]),t._v(" "),a("tr",[a("td",[t._v("Danish")]),t._v(" "),a("td",[t._v("dn")])]),t._v(" "),a("tr",[a("td",[t._v("Dutch")]),t._v(" "),a("td",[t._v("nl")])]),t._v(" "),a("tr",[a("td",[t._v("English")]),t._v(" "),a("td",[t._v("en")])]),t._v(" "),a("tr",[a("td",[t._v("Finnish")]),t._v(" "),a("td",[t._v("fi")])]),t._v(" "),a("tr",[a("td",[t._v("French")]),t._v(" "),a("td",[t._v("fr")])]),t._v(" "),a("tr",[a("td",[t._v("German")]),t._v(" "),a("td",[t._v("de")])]),t._v(" "),a("tr",[a("td",[t._v("Greek")]),t._v(" "),a("td",[t._v("el")])]),t._v(" "),a("tr",[a("td",[t._v("Gujrati")]),t._v(" "),a("td",[t._v("gu")])]),t._v(" "),a("tr",[a("td",[t._v("Hindi")]),t._v(" "),a("td",[t._v("hi")])]),t._v(" "),a("tr",[a("td",[t._v("Hungarian")]),t._v(" "),a("td",[t._v("hu")])]),t._v(" "),a("tr",[a("td",[t._v("Indonesian")]),t._v(" "),a("td",[t._v("id")])]),t._v(" "),a("tr",[a("td",[t._v("Italian")]),t._v(" "),a("td",[t._v("it")])]),t._v(" "),a("tr",[a("td",[t._v("Japanese")]),t._v(" "),a("td",[t._v("ja")])]),t._v(" "),a("tr",[a("td",[t._v("Kannada")]),t._v(" "),a("td",[t._v("kn")])]),t._v(" "),a("tr",[a("td",[t._v("Korean")]),t._v(" "),a("td",[t._v("ko")])]),t._v(" "),a("tr",[a("td",[t._v("Malayalam")]),t._v(" "),a("td",[t._v("ml")])]),t._v(" "),a("tr",[a("td",[t._v("Polish")]),t._v(" "),a("td",[t._v("pl")])]),t._v(" "),a("tr",[a("td",[t._v("Portuguese")]),t._v(" "),a("td",[t._v("pt")])]),t._v(" "),a("tr",[a("td",[t._v("Romanian")]),t._v(" "),a("td",[t._v("ro")])]),t._v(" "),a("tr",[a("td",[t._v("Russian")]),t._v(" "),a("td",[t._v("ru")])]),t._v(" "),a("tr",[a("td",[t._v("Slovak")]),t._v(" "),a("td",[t._v("sk")])]),t._v(" "),a("tr",[a("td",[t._v("Spanish")]),t._v(" "),a("td",[t._v("es")])]),t._v(" "),a("tr",[a("td",[t._v("Swedish")]),t._v(" "),a("td",[t._v("sv")])]),t._v(" "),a("tr",[a("td",[t._v("Tamil")]),t._v(" "),a("td",[t._v("ta")])]),t._v(" "),a("tr",[a("td",[t._v("Telungu")]),t._v(" "),a("td",[t._v("te")])]),t._v(" "),a("tr",[a("td",[t._v("Thai")]),t._v(" "),a("td",[t._v("th")])]),t._v(" "),a("tr",[a("td",[t._v("Turkish")]),t._v(" "),a("td",[t._v("tr")])]),t._v(" "),a("tr",[a("td",[t._v("Ukrainian")]),t._v(" "),a("td",[t._v("uk")])]),t._v(" "),a("tr",[a("td",[t._v("Vietnamese")]),t._v(" "),a("td",[t._v("vi")])])])]),t._v(" "),a("p",[t._v("By default the language is "),a("strong",[t._v("English")])]),t._v(" "),a("h2",{attrs:{id:"the-save-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-save-parameter"}},[t._v("#")]),t._v(" "),a("strong",[t._v("The save Parameter")])]),t._v(" "),a("p",[t._v("In some cases, you might want to save the audio. For this, we can use the save parameter. It receive a Boolean (True or False). By default. "),a("strong",[t._v("Voix")]),t._v(" will not save the audio. But manually we can do it.")]),t._v(" "),a("p",[t._v("Let's see it in the code !")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n\nspeak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here we will write the text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("p",[t._v("That's it! Cool ?")]),t._v(" "),a("h2",{attrs:{id:"the-filename-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-filename-parameter"}},[t._v("#")]),t._v(" "),a("strong",[t._v("The FileName Parameter")])]),t._v(" "),a("p",[t._v("If we save the audio, we will see that the audio file is saved with a name callse "),a("strong",[t._v("default.mp3")]),t._v(". But we don't want that ! We need our own name.")]),t._v(" "),a("p",[t._v("Let's see how can we do this in code.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n\nspeak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here we will write the text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Biiiiig_File_Name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('Now, we will see that , the audio file is named as "'),a("strong",[t._v("Biiiiig_File_Name.mp3")]),t._v('" .')]),t._v(" "),a("h2",{attrs:{id:"the-translate-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-translate-parameter"}},[t._v("#")]),t._v(" "),a("strong",[t._v("The Translate Parameter")])]),t._v(" "),a("p",[t._v("We have completed all of the features of "),a("strong",[t._v("Voix")]),t._v(" , Now , we will learn the last feature called "),a("strong",[t._v("Translate")])]),t._v(" "),a("p",[t._v("Can we translate text and generate voice by the translated text using voix ? Surprisingly , the answer is YES !")]),t._v(" "),a("p",[t._v("Now let's see it in the code !")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" voix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" speak\n\nspeak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Here we will write the text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("translate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("By the way, I don't want to save the audio file. So I have removed it. Don't be confused !")]),t._v(" "),a("p",[t._v("That's it ! We have completed the package called "),a("strong",[t._v("Voix")])]),t._v(" "),a("h2",{attrs:{id:"unexpected-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unexpected-problems"}},[t._v("#")]),t._v(" Unexpected Problems")]),t._v(" "),a("p",[t._v("Sometimes, "),a("strong",[t._v("Voix will not work")]),t._v(" without internet. So make sure that while "),a("strong",[t._v("we are running voix , Just turn on the internet")])]),t._v(" "),a("h2",{attrs:{id:"fun-fact-😅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fun-fact-😅"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Fun Fact 😅")])]),t._v(" "),a("p",[t._v("Voix is a very small library. It has only 90 lines of code. Whereas, The Documentation readme file has about 150 lines of code. 😅😅")]),t._v(" "),a("p",[t._v("Hope you like the package. Thanks for using it")])])}),[],!1,null,null,null);e.default=r.exports}}]);