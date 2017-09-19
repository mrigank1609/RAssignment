library(RCurl)
library(XML)


#pageData <- "https://raw.githubusercontent.com/mrigank1609/RAssignment/master/EPBA%20Graded%20Assignment%2001/The%20World's%20Most%20Valuable%20Brands%20List%20-%20Forbes.html"
#dataAssign <- readHTMLTable(pageData)

#Reading data from file which is in assignment url
#Saved the data in C:\\ and reading in a variable
dataAssign <-readHTMLTable("C:\\The World's Most Valuable Brands List - Forbes.html")

#Now I need to know what is stored in dataAssign so I will simply type and see
dataAssign

#I see that dataAssign stores list of vectors, now I will run class method to see 
#the class of dataAssign

class(dataAssign)

#Now I am sure that it is a list and stores a list of vector, now I will 
#use the vector that is relevant to me, so I saw that the_list is useful for me
#Now I will store the vector that is having data as other vectors in that list
#is not useful 

dataAssignVector <- dataAssign$the_list

#Now I have to just be sure what type of dataAssignVector is this 
typeof(dataAssignVector)

#So I know now that it is a list , now I will see what is there inside 

dataAssignVector

#I see that it contains a set of data which I think can be converted to data frame
dataAssignFrame <- as.data.frame(dataAssignVector)

#Now I will see the framed data 

View(dataAssignFrame)

#I can see that data is arranged as I wanted , however there is an extra column 
#which is not required for me , I will remove it 
names(dataAssignFrame)[names(dataAssignFrame)==""] <- "Empty"
dataAssignFrame$Empty <- NULL


#I will view it again to see , Empty column is gone :) 
View(dataAssignFrame)

#I dont trust the hints :() so I will check the class of some of the columns
class(dataAssignFrame$Rank)
class(dataAssignFrame$`1-Yr Value Change`)
class(dataAssignFrame$Industry)

#Now I am convinved that yes becuase of the extra characters all the columns 
#are treated as characters, I will clean the data by removing them
#I faced some issues beacause of name as gsub etc is not working fine with names
#having '' hence renaming them

dataAssignFrame$Rank <- gsub("#", "", dataAssignFrame$Rank , fixed = TRUE)
dataAssignFrame$`Brand Value` <- gsub("$", "",dataAssignFrame$`Brand Value`, fixed = TRUE)
dataAssignFrame$`Brand Revenue` <- gsub("$", "", dataAssignFrame$`Brand Revenue`, fixed = TRUE)
dataAssignFrame$`Company Advertising` <- gsub("$", "", dataAssignFrame$`Company Advertising`, fixed = TRUE)


#We still have some columns that has data having representation in B and M
#However if I remove those, I will need indexes of column that has M to convert 
#those in Billion as that is what is required to display
View(dataAssignFrame)

#I dont see any column in Million for Brand Value 
grep("M",dataAssignFrame$`Brand Value`)
grep("M",dataAssignFrame$`Brand Revenue`)
grep("M",dataAssignFrame$`Company Advertising`)
