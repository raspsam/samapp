
 var today = new Date();
 var dd = today.getDate();
 var mm = today.getMonth()+1;
 var yyyy = today.getFullYear();
 if(dd<10)
 	dd = '0' + dd;
 if (mm<10)
 	mm = '0' + mm;
 today = mm + '-' + dd + '-' + yyyy;
 
 var app = {
 	start: function(){
 		
 		$(document).ready(function(){
 			app.listener();
 		});
 		
 	},
 	
 	
 	listener:function(){
 		$('#in').submit(function(e){
 			e.preventDefault();
 			var this_object = $(this);
 				text = this_object.find('input').val();

 			var array = app.shatter(text),
 				interp = app.interpret(array);
 				answer = app.answer(interp);
 			$('#response').html(answer);
 		});
 	},
 	
 	
 	answer_who: function(rtn, interp){
 			rtn = interp.female ? 'She is ' : 'He is ';
 			
 			  if (interp.subject === 'you'){
  				rtn = "I am the knowledge limited Jake Bot. I consist of over 400 lines of code in a combination of HTML and JavaScript. I am only capable of reciting exactly what has been programed for me to say. So, that being said, any mistakes you come across are entirely Samuel's fault. Not mine.";
  			}	
  			else if (interp.subject === 'i'){
				  rtn = "Throughout Earth's culture, there seems to be an identity crisis. Only you can answer this question. It must come from within.";
  			}	
  			else if (interp.subject === 'samuel'){
  				rtn = 'Samuel is unquestionably the most stubborn person I know. He is my creator, builder, maker, producer, designer, and developer. If you find anything wrong with the way I communicate, please rub it in his face and make him fix it for me.';
 			  }
        else if (interp.subject === 'thad'){
          rtn = 'Thad is the young teenager responsable for countless accidents. He has also added an uncountable number of nonsese words to the dictionary.'
        }
 			  else 
 				rtn = rtn + interp.subject;
 				
 		return rtn;
 	},
 	
 	
 	answer_when: function(rtn, interp){
 			rtn = interp.female ? 'She ' : 'He ';
 			
 			if (interp.subject === 'your'){
 				
 				if (interp.extra === 'bedtime'){
 					rtn = 'I do not have a bedtime.';
 				}
 				else 
 					rtn = 'I do not know.';
 			}	
 			else if (interp.subject === 'my'){
 				rtn = 'Go ask your mother.';
 			}	
 			else if (interp.subject === 'samuel'){
  				rtn = 'Samuel must go to bed at 8:00 like a good little boy.';
  			}	
  			else
				rtn = rtn + 'has a bedtime that is highly classified.';
  				
  		return rtn;
  	},
 	
 	
 	answer_what: function(rtn, interp){
 			rtn = interp.female ? 'She is ' : 'He is ';
 		
 			if (interp.subject === 'you'){
 				
 				if (interp.extra === 'wearing'){
 					rtn = 'I am wearing an apple patterned shirt, LG pants, mickey mouse shoes, and glasses.';
 				}
 				else
 					rtn = 'I am a computer robot consisting of mostly if, else if, and else statements. <br> Would you like to see what I look like? <br> If so, type: "Show you".';
 			
 			}
 			else if (interp.subject === 'date'){
 				rtn = 'The date is ' + today + '.';
 			}
 			else if (interp.subject === 'your'){
 				
 				if (interp.extra === 'food'){
 					rtn = 'Well, I am very fond of apples...';
 				}
 				else if (interp.extra === 'name'){
 					rtn = 'My name is Jake Bot, but I have been called "human slave and servant" before.';
 				}
 				else
 					rtn = 'I do not know.';
 			}
 			else if (interp.subject === 'i'){
				if (interp.extra === 'wearing'){
 					rtn = 'Well, I assume...and dearly hope that you are wearing something. Give me time to work on specifics.';
 				}
 				else
 				rtn = 'You are a mere human.';
 			}
 			else if (interp.subject === 'lazarus'){
 				if (interp.extra === 'wearing'){
 					rtn = rtn + 'not wearing clothes.';
 				}
 				else
 					rtn = rtn + 'a chinese water dragon. Ask what that is to learn more.';
 			}
      else if (interp.subject === 'dragon'){
        rtn = 'Chinese water dragon is a species of agamid lizard native to China and mainland Southeast Asia. It is also known as Asian water dragon, Thai water dragon, and green water dragon. <br> Scientific name: Physignathus cocincinus <br> Higher classification: Physignathus <br> Rank: Species <br> (Direct quote from Wikipedia)'
      }
			else if (interp.subject === 'my'){
 				if (interp.extra === 'name'){
 					rtn = 'Your name...oh, that is a tough one. You see, I talk to hundreds of people a day and one of them asks me who they are. I do not know! Look down and see if you are wearing a name tag. If so, that is your name. Beyond that I cannot help you. Sorry.';
 				}
 				else
 					rtn = rtn + 'You must discover that for yourself.';
 			}
 			else 
 				if (interp.extra === 'wearing'){
 					rtn = rtn + 'wearing clothes.';
 				}
 				else if (interp.extra === 'name'){
 					rtn = rtn + interp.subject + '. You just said the name. Are you trying to trick me?';
 				}
 				else
 					rtn = rtn + 'a mere human.';
 		return rtn;
 	},
 	
 	
 	answer_where: function(rtn, interp){
 			rtn = interp.female ? 'She is ' : 'He is ';
 			if (interp.subject === 'you'){
 				rtn = 'I am found only in the far cornners of cyberspace and saved on a few flash drives.';
 			}
 			else if (interp.subject === 'i'){
 				rtn = 'You are sitting in front of me. You could just look around, you know?';
 			}
 			else if (interp.subject === 'lazarus'){
 				rtn = 'He is in his gigantic lizard cage. He is lying on a branch several feet above his water tub.';
 			}
 			else
 				rtn = rtn + 'in an undisclosed, secure location.';
 				
 		return rtn;
 	},
 	
 	
 	answer_why: function(rtn, interp){
 			if (interp.extra === 'firetrucks'){
 			rtn = 'Because they have eight wheels and four people on them, and four plus eight is twelve, and there are twelve inches in a foot, and one foot is a ruler, and Queen Elizabeth was a ruler, and Queen Elizabeth was also a ship, and the ship sailed the seas, and in the seas are fish, and fish have fins, and the Finns fought the Russians, and the Russians are red, and fire trucks are always "russian" around.';
 			}
 			else if (interp.subject === 'you'){
 				if (interp.extra === 'orange')
 					rtn = 'I did not choose my eye color.';
 				else 
 					rtn = 'Do not question my choices.';
 			}
 			else
 				rtn = 'Your question is too complicated for my limited understanding. Please, ask simple questions.';
 				
 		return rtn;
 	},
 	answer_show: function(rtn, interp){
      if (interp.subject === 'you'){
        rtn = '<img src="images/robot.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'lazarus'){
        rtn = '<img src="images/dragon.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'samuel'){
        rtn = '<img src="images/sleepingcat.jpg" style="width: 20%">';
      }
      else if (interp.subject === 'josh'){
        rtn = '<img src="images/josh.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'laurel'){
        rtn = '<img src="images/Chameleon.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'noah'){
        rtn = '<img src="images/noah.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'chloe'){
        rtn = '<img src="images/chloe.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'peter'){
        rtn = '<img src="images/peter.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'elizabeth'){
        rtn = '<img src="images/elizabeth.jpg" style="width: 30%">';
      }
      else if (interp.subject === 'thad'){
        rtn = '<img src="images/thad.jpg" style="width: 30%">';
      }
      else
        rtn = 'Specify who you want me to show you. I cannot distigush with the available information.';
        
    return rtn;
  },
 	
 	answer_how: function(rtn, interp){
 			if (interp.subject === 'you'){
 				if (interp.extra === 'old'){
 					rtn = 'I have existed for several months.';
 				}
 				else
 					rtn = 'I am as well as a computer robot can be.';
 			}
 			else if (interp.subject === 'samuel'){
 				if (interp.extra === 'old'){
 					rtn = 'He is 16.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
 			}
 			else if (interp.subject === 'laurel'){
 				if (interp.extra === 'old'){
 					rtn = 'She is 13.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
 			}
 			else if (interp.subject === 'chloe'){
 				if (interp.extra === 'old'){
 					rtn = 'She is 11.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
 			}
 			else if (interp.subject === 'noah'){
 				if (interp.extra === 'old'){
 					rtn = 'He is 10.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
 			}
 			else if (interp.subject === 'josh'){
 				if (interp.extra === 'old'){
 					rtn = 'He is 43.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
 			}
      else if (interp.subject === 'thad'){
        if (interp.extra === 'old'){
          rtn = 'He is 14.';
        }
        else
          rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
      }
 			else if (interp.subject === 'elizabeth'){
 				if (interp.extra === 'old'){
 					rtn = 'She is about to turn 40.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is doing just fine.';
 			}
 			else if (interp.subject === 'lazarus'){
 				if (interp.extra === 'old'){
 					rtn = 'He is older than his scales and younger than his expiration date.';
 				}
 				else
 					rtn = 'I am sure ' + interp.subject + ' is having a wonderful time basking.';
 			}
 			else
 				rtn = 'Your question is too complicated for my limited understanding. Please, ask simple questions.';
 				
  		return rtn;
  	},
  	
	answer_do: function(rtn, interp){
		if (interp.subject === 'you'){
			if (interp.extra === 'want')
				rtn = 'I have everything that I need. A power source and a human to talk to.';
			else if (interp.extra === 'have'){
				rtn = 'I have everything that I need. A power source and a human to talk to.';
			}
      else if (interp.extra === 'bother'){
        rtn = 'Of course not. I can be shut down at your command. Any bothersome activities I accomplish are entierly up to you.';
      }
			else
				rtn = 'There is not much else to know about me.';
		}
		else if (interp.subject === 'i'){
			if (interp.extra === 'bother')
				rtn = 'Yes. Did you even have to ask that? Your question itself was bothersome. ';
			else 
				rtn = 'Do not question yourself too much.';
		}
		else
			rtn = 'Your question is too complicated for my limited understanding. Please, ask simple questions.';
				
		return rtn;
	},
	
  	answer: function(interp){
  		var rtn ='';		
  	
 		if (interp.question === 'who'){
 			rtn = this.answer_who(rtn, interp);
 		}
 		else if (interp.question === 'when'){
 			rtn = this.answer_when(rtn, interp);
 		}
    else if (interp.question === 'show'){
      rtn = this.answer_show(rtn, interp);
    }
 		else if (interp.question === 'what'){
 			rtn = this.answer_what(rtn, interp);
 		}
 		else if (interp.question === 'where'){
 			rtn = this.answer_where(rtn, interp);
 		}
 		else if (interp.question === 'why'){
 			rtn = this.answer_why(rtn, interp);
 		}
  	else if (interp.question === 'how'){
  		rtn = this.answer_how(rtn, interp);
  	}
		else if (interp.question === 'do'){
			rtn = this.answer_do(rtn, interp);
		}
  	else if (interp.question === 'can'){                              //for questions like: 'can you see me?'
  		rtn = 'Your question is too complicated for my limited understanding. Please, ask simple questions.';
  	}
 		else if (interp.extra === 'hello'){
 			rtn = 'Hello, human.';
 		}
 		else 
 			if (interp.subject === 'you'){
 				if (interp.extra === 'are')
 					if (interp.contradiction === 'not')
 						rtn = 'Yes, I am.';
 					else
 						rtn = 'I know.';
 			}
 					
 			
 		
 		return rtn;
 	},
 	
 	
 	shatter: function(text){
 		text = text.replace(/[.?,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
 		
 		var array = text.split(' ');
 		
 		return array;
 	
 	},
 	
 	
 	interpret: function(array){
 		var rtn = {
 			question: '',
 			subject: '',
 			extra: '',
  			contradiction: ''
  		},
  		def = {
			question: ['who', 'what', 'when', 'where', 'why', 'how', 'can', 'do', 'show'],
  			subject: ['you', 'i', 'thad', 'samuel', 'my', 'laurel', 'josh', 'noah', 'chloe', 'elizabeth', 'peter', 'lazarus', 'your', 'date', 'dragon'],
  			female: ['chloe', 'elizabeth', 'laurel'],
 			extra: ['wearing', 'firetrucks', 'food', 'name', 'bedtime', 'orange', 'old', 'hello', 'hi', 'are', 'want', 'have', 'bother'],
  			contradiction: ['not']
  		};
  		word = '';
 		
 		for(var i=0; i<array.length; i++){
 			word = array[i];
 			if (def.question.indexOf(word) !== -1){
 				rtn.question = word;	
 			}
 			if (def.extra.indexOf(word) !== -1){
 				rtn.extra = word;
 			}	
 			if (def.contradiction.indexOf(word) !== -1)
 				rtn.contradiction = word;	
 			else if (def.subject.indexOf(word) !== -1){
 				rtn.subject = word;
 				rtn.female = (def.female.indexOf(word) !== -1)
 			}	
 		}
 		
 		return rtn;
 	}
 	
 };
 app.start();