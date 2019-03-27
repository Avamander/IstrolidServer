#!/usr/bin/python3
outputfile = None
inputfilename = "istrolid_r26.js"

with open(inputfilename) as inputfile:
    for line in inputfile:
        if "//from" in line:
            outputfilename = line.split(" ")[1]
            if outputfile:
                outputfile.close()
            outputfile = open(inputfilename.replace(".js", "/") + outputfilename.strip().replace("/", "_"), "w")
        elif "//require" in line:
            outputfilename = line.split("(")[1].replace("'../", "")
            if outputfile:
                outputfile.close()
            outputfile = open(inputfilename.replace(".js", "/") + outputfilename.strip().replace("/", "_").replace("');", ""), "w")

        outputfile.write(line)
