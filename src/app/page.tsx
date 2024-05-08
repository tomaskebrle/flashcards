"use client";
import { Textarea } from "@/components/ui/textarea";
import { Questions } from "./questions";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Generátor otázek</h1>
            <p className="text-gray-600 dark:text-gray-400">Vložte výpisky, nebo si vyberte z testovacích výpisků a vygenerujte otázky na svůj další test!</p>
          </div>
          <div className="space-y-4">
            <Textarea className="w-full h-40 resize-none" placeholder="Enter your notes here..." />
            <Questions
              note={`
            Je to společensko vědní obor. Zkoumá právo jako takové. Zkoumá:
 - právní vztahy
 - vznik a postavení zprává ve společnosti
 - vztah státu a práva
# Podobory právní vědy
- Právní sociologie - společnost a právo a její působení
- Historie práva
- Právo a psychologie - zkoumá jak právo ovlivnňuje psychologii
- teorie legislativy - jak se dělají právní normy

# Pojem a význám práva
Lidé začali žít ve skupinách a vytvářeli se tu vzájemné vztahy mezi lidma. A aby ty vztahy fungovali tak se podřizujeme pravidlům. Když tato pravidla nerespektujem tak nám hrozí sankce (postih). 

Právo je soubor norem vydanách a uznaných státem. A jeho dodržování je vynutitelná státem. Neznalost zákona neomlová.

---
# Pojmy
- Právní norma - sepsaný zákon, který je vynutitlný
- Mravní norma - nepostižitelný, například nepozdravím

---

# Základní členění práva
 - Hmotné a procesní
 - Objektivní a subjektivní
## Právo hmotné
- Hmotné právo jsou právní předpisy
- Ty nám říkají jak se máme chovat
- A jaké jsou sankce za to že je porušíme
## Právo procesní
- určuje postup co se stane když někdo nedodrží to hmotné

## Právo subjektivní
- Je oprávnění jedince, nějak se chovat
- Jedincem může být fyzický i právní osoba
## Právo objektivní
- Soupis pravidel chování která jsou platný pro všechny
- Jsou to zákony, vládní nařízení, vyhlášky
- Je vynutitelné
- Všichni občani ho musí respektovat, jinak hrozí sankce
---
# Prameny práva (str. 48)
Jsou to formy ve kterých je obsaženo obkjektivní právo. Má základní dvě formy **psané** a **nepsané**. Psané jsou právní smlouvy, akty a literatura. A nepsané obyčeje a precedenty.
## Hlavní prameny
- Normativní právní akty
- právní obyčeje,zvyklosti
- soudní precedenty
- normativní smlouvy - mezinárodní právo
### Normativní právní akty
- právní předpisy, zákony, vládní nářízení, vyhlášky
- všeobecně závazné pro celou společnost
- jsou státem vynutitelné

# Právní řád
Souhrn všech právních pramenů, jež platí v určitém státě. Normativní právní akty (předpisy) jsou výsledkem legislativního procesu státních orgánů. Předpisy mají různou právní sílu podle významu. Jsou právní předpisy zákonné a podzákonné.
Do zákonných patří ústava české republiky, listina základních svobod atd. Podzákkonné jsou různe vyhlášky ministerstev, obcí.

# Právní norma
Je to závazné pravidlo chování, které je uznáne státem. Stát kontroluje jestli je dodržováno. Je vynutitelné a postižitelné.


            `}
            ></Questions>
          </div>
        </div>
      </div>
    </main>
  );
}
