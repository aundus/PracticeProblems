from decimal import Decimal
fact_list = [
    ("m", "3.28", "ft"),
    ("ft", "12", "in"),
    ("hr", "60", "min"),
    ("min", "60", "sec"),
]
queries = [
    ("2", "m", "in"),
    ("13", "in", "m"),
    ("2", "m", "sec"),
]

# step 1: construct graph repr of facts, where we map { src: str -> (target:str, conversion:Decimal)}
# step 2: for each query traverse the graph (BFS) from src to find the target node, at each node, multiplying by 'conversion'

class Converter:
    facts: dict[str, tuple[str, Decimal]]


    def build_facts(self, fact_list: list[tuple]):
        self.facts = {}
        for src, rate, target in fact_list:
            if src in self.facts:
                self.facts[src].append((target, Decimal(rate)))
            else:
                self.facts[src] = [(target, Decimal(rate))]
            if target in self.facts:
                self.facts[target].append((src, 1 / Decimal(rate)))
            else:
                self.facts[target] = [(src, 1 / Decimal(rate))]

    def __init__(self, fact_list: list[tuple]):
        self.build_facts(fact_list)

    def convert(self, src:str, target:str, amount:Decimal) -> Decimal | str:
        if src not in self.facts:
            return "No conversion possible"
        queue = [(src, amount)]
        visited = set()
        while queue:
            node, result = queue.pop(0)
            visited.add(node)
            for next_node, rate in self.facts[node]:
                new_result = result * rate
                # print(next_node, rate, result)
                if next_node == target:
                    return new_result
                if next_node not in visited:
                    queue.append((next_node, new_result)) 
        return "No conversion possible"

if __name__ == "__main__":
    c = Converter(fact_list=fact_list)
    for amount, src, target in queries:
        print(c.convert(src, target, Decimal(amount)))

