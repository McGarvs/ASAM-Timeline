def compare_until(seatlist):
    return

if __name__ == "__main__":
    with open("info.txt", "r") as my_input:
        lines = my_input.readlines()
        info = list(map(lambda l: list(l.replace("\n", "")), lines))
        print(info[0])