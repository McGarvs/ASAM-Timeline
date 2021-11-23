import json

def notEmpty(l):
    return (l != [""])

def convert(mylist):
    dictList = []
    while mylist != []:
        dictList.append(dict(mylist[0:3]))
        mylist = mylist[3:]
    return dictList

if __name__ == "__main__":
    with open("info.txt", "r") as my_input:
        lines = my_input.readlines()
        info = list(map(lambda l: (str(l.replace("\n", ""))).split(":"), lines))
        info = list(filter(lambda x: notEmpty(x), info))
        for i in range(len(info)):
            info[i] = tuple([info[i][0], info[i][1][1:]])
        newinfo = convert(info)
        jsonString = json.dumps(newinfo)
        jsonFile = open("data.json", "w")
        jsonFile.write(jsonString)
        jsonFile.close()
    my_input.close()