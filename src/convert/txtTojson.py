import json
import codecs

def notEmpty(l):
    return (l != ["\r"])

def convert(mylist):
    dictList = []
    while mylist != []:
        dictList.append(dict(mylist[0:3]))
        mylist = mylist[3:]
    return dictList

if __name__ == "__main__":
    my_input =  codecs.open("info.txt", "r", "utf-8")
    lines = my_input.readlines()
    info = list(map(lambda l: (str(l.replace("\n", ""))).split(":"), lines))
    info = list(filter(lambda l: (l != ["\r"]), info))
    for i in range(len(info)):
        info[i] = tuple([info[i][0], info[i][1][1:]])
    newinfo = convert(info)
    jsonString = json.dumps(newinfo)
    jsonFile = codecs.open("data.json", "w", "utf-8")
    jsonFile.write(jsonString)
    jsonFile.close()
    my_input.close()