const MODEL = {
  "sheet": "Calculation",
  "inputs": [
    {
      "address": "C3",
      "label": "Conveyor Length in meter",
      "default": 172
    },
    {
      "address": "C4",
      "label": "Conveyor Width  in meter",
      "default": 0.8
    },
    {
      "address": "C5",
      "label": "Conveyor No of Belt",
      "default": 2
    },
    {
      "address": "C7",
      "label": "The spacing between two spray nozzles shall not exceed 3 m, as per IS:15325:2020 clause 8.7.4.1",
      "default": 3
    },
    {
      "address": "C8",
      "label": "No of spray nozzles shall consdridied at one location",
      "default": 2
    },
    {
      "address": "C9",
      "label": "The system pressure shall be 1.4 to 3.5 bar as per IS:15325 clause 8.7.3. For better penetration, 2.1 bar pressure shall be considered at the hydraulically remotest point.",
      "default": 2.1
    },
    {
      "address": "C10",
      "label": "No of Linear Heat Sensing Cable is considered for the conveyor, recommended on three sides: top, left, and right.",
      "default": 3
    },
    {
      "address": "C12",
      "label": "Distance from deluge valve to main hydrant line in Meter",
      "default": 18
    },
    {
      "address": "C15",
      "label": "Design Density 10.2 lpm/m2 as per IS:15325 Clause No 8.7.2",
      "default": 10.2
    },
    {
      "address": "C21",
      "label": "Calculation for K-Factor Selection & Nozzle Flow",
      "default": "Nozzle Flow / \u221a (Pressure)"
    },
    {
      "address": "C24",
      "label": "MVWS Nozzle Selected - Spray Angle",
      "default": "120 Deg or 140 Deg "
    },
    {
      "address": "C29",
      "label": "Item Description",
      "default": "Qty"
    }
  ],
  "formulas": [
    {
      "address": "C11",
      "label": "Approx. quantity in meter of LHS Cable from conveyor to deluge valve control panel",
      "formula": "=18"
    },
    {
      "address": "C14",
      "label": "Total Area (In sq. meter) Formula = L x W x Number of Belts",
      "formula": "=(C3*C4*C5)"
    },
    {
      "address": "C16",
      "label": "Theoretical Water Requirement [L/Min]",
      "formula": "=(C14*C15)"
    },
    {
      "address": "C17",
      "label": "Theoretical Water Requirement [m^3/h]",
      "formula": "=(C16*0.06)"
    },
    {
      "address": "C18",
      "label": "MW Water spray nozzle quantity with 5% extra.",
      "formula": "=EVEN(((ROUNDUP(C3/C7,0))*C8)*1.05)"
    },
    {
      "address": "C19",
      "label": "Total Quantity in meter of Linear Heat Sensing Cable in Meter 10% extra.",
      "formula": "=EVEN((ROUNDUP(C3*C10,0))+(C11))*1.1"
    },
    {
      "address": "C20",
      "label": "Theoretical Flow per Nozzle (L/Min):",
      "formula": "=(C16/C18)"
    },
    {
      "address": "C22",
      "label": "K-Factor:",
      "formula": "=((C20)/(SQRT(C9)))"
    },
    {
      "address": "C23",
      "label": "MVWS Nozzle Selected - K-Factor ",
      "formula": "=IF(C22<=18,18,IF(C22<=22,22,IF(C22<=26,26,IF(C22<=30,30,IF(C22<=35,35,IF(C22<=41,41,IF(C22<=51,51,IF(C22<=64,64,IF(C22<=79,79,91)))))))))"
    },
    {
      "address": "C25",
      "label": "Actual Flow Based on K-Factor (L/min) = K-Factor \u00d7 \u221a Pressure \u00d7 Number of Nozzles",
      "formula": "=(C23*(SQRT(C9)*C18))"
    },
    {
      "address": "C26",
      "label": "Actual Flow Provided Based on K-Factor (m^3/h):",
      "formula": "=(C25*0.06)"
    },
    {
      "address": "C27",
      "label": "Deluge Valve Selection:",
      "formula": "=IF(OR(C26>1150,C26<10.01),\"Not Found\",IF(C26>=550.01,\"200 mm\",IF(C26>=200.01,\"150 mm\",IF(C26>=100.01,\"100 mm\",IF(C26>=50.01,\"80 mm\",\"50 mm\")))))"
    },
    {
      "address": "C30",
      "label": "=C27 & \" Cast Iron Deluge Valve with Wet Pilot Basic Trim Assembly\"",
      "formula": "=IF(C27<>\"\",1,\"\")"
    },
    {
      "address": "C31",
      "label": "=C27 & \" M.S Pipes Heavy C Class As Per IS: 1239 \"",
      "formula": "=(C12)"
    },
    {
      "address": "C32",
      "label": "=C27& \" G.I. Pipes Heavy C Class As Per IS: 1239\"",
      "formula": "=CEILING(((C3*70%)+C11)*1.1,6)"
    },
    {
      "address": "C33",
      "label": "=IF(B32=\"200 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B32=\"150 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B32=\"100 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B32=\"80 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"65 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\n   IF(B32=\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"50 mm G.I. Pipes Heavy C Class As Per IS: 1239\",\"\")))))",
      "formula": "=CEILING(((C3*30%))*1.1,6)"
    },
    {
      "address": "C34",
      "label": "32 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "formula": "=CEILING(IF(OR(C8=1,C8=2),0,IF(C8=3,0.4,\"\"))*(C3/C7)*1.1,6)"
    },
    {
      "address": "C35",
      "label": "25 mm G.I. Pipes Heavy C Class As Per IS: 1239",
      "formula": "=CEILING((C3/C7)*(C8*1.8)*1.1,6)"
    },
    {
      "address": "C36",
      "label": "=C27 &\" Cast Iron Wafer Type Butterfly Valve\"",
      "formula": "=(C30*4)"
    },
    {
      "address": "C37",
      "label": "=C27&\" MS Y Type Strainers - Body : MS as per IS1239 (I)\"",
      "formula": "=(C30*1)"
    },
    {
      "address": "C38",
      "label": "Medium Velocity Water Spray Nozzle Nickel Chrome Plated Brass 1/2\" BSPT",
      "formula": "=(C18)"
    },
    {
      "address": "C39",
      "label": "Digital Linear Heat Detection Cable Alarm Temperature 70\u2070C",
      "formula": "=(C19)"
    },
    {
      "address": "C40",
      "label": "Deluge Valve Control Panel Outdoor with Canopy and IP65 Protection ",
      "formula": "=(C30*1)"
    },
    {
      "address": "C41",
      "label": "Pressure Switch with All Accessories. Range : 2-14 kg.",
      "formula": "=(C30*2)"
    },
    {
      "address": "C42",
      "label": "24 VDC Solenoid Valve, Operating Pressure: 1 - 20 Bar, 1/2\" BSPT",
      "formula": "=(C30*1)"
    },
    {
      "address": "C43",
      "label": "Monitor Module, if applicable",
      "formula": "=(C30*2)"
    },
    {
      "address": "C44",
      "label": "Control  Nodule, if applicable",
      "formula": "=(C30*1)"
    },
    {
      "address": "C45",
      "label": "12V - 10 AMPS Battery ",
      "formula": "=(C30*2)"
    },
    {
      "address": "C46",
      "label": "Cables and Accessories",
      "formula": "=(C30*1)"
    },
    {
      "address": "C47",
      "label": "Other Hardware Like Nut Bolts, U Clamps Anchor Fastener, Flanges & Green Gasket Etc.",
      "formula": "=(C30*1)"
    },
    {
      "address": "C48",
      "label": "MS Support Made of L Angle, C Channel, & MS Plate Etc.",
      "formula": "=((C31+C32+C33+C34+C35)/3)*3.5"
    }
  ]
};

// Helper: Excel-like evaluator with subset functions used in this sheet
function makeEvaluator(state) {
  const fns = {
    IF: (cond, a, b) => cond ? a : b,
    OR: (...args) => args.some(Boolean),
    EVEN: (x) => {
      const n = Math.ceil(Math.abs(Number(x)));
      const even = n % 2 === 0 ? n : n + 1;
      return x < 0 ? -even : even;
    },
    ROUNDUP: (x, d=0) => {
      const p = Math.pow(10, d);
      const xv = Number(x);
      return Math.sign(xv) * Math.ceil(Math.abs(xv) * p) / p;
    },
    SQRT: (x) => Math.sqrt(Number(x)),
    CEILING: (x, sig=1) => {
      const s = Number(sig) || 1;
      return Math.ceil(Number(x) / s) * s;
    },
  };

  function getCell(addr) {
    const v = state[addr];
    return (v === "" || v == null) ? 0 : v;
  }

  function translate(formula) {
    let f = String(formula).trim();
    if (f.startsWith('=')) f = f.slice(1);

    // Excel-specific fixes
    // 1) "<>" -> "!="
    f = f.replace(/<>/g, '!=');

    // 2) Percentages like 70% -> (70/100)
    f = f.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

    // 3) Replace cell refs with getCell('C12')
    f = f.replace(/\b([A-Z]+(\d+))\b/g, (m, a) => "getCell('" + a + "')");

    // 4) Function names to namespace
    f = f.replace(/\b(IF|OR|EVEN|ROUNDUP|SQRT|CEILING)\s*\(/g, (m, name) => "fns." + name + "(");

    // 5) Lone "=" (not >=, <=, !=, ==) -> "=="
    f = f.replace(/(?<![<>=!])=(?![=])/g, '==');

    // 6) Excel exponent ^ to JS **
    f = f.replace(/\^/g, '**');

    return f;
  }

  return function evalFormula(formula) {
    const compiled = translate(formula);
    try {
      const fn = new Function('state','getCell','fns',"return (" + compiled + ");");
      return fn(state, getCell, fns);
    } catch (e) {
      console.warn('Eval error for', formula, ' -> ', e, '\nCompiled:', compiled);
      return NaN;
    }
  }
}


const inputsDiv = document.querySelector('#inputs');
const resultsDiv = document.querySelector('#results');
const bomBody = document.querySelector('#bom tbody');
const resetBtn = document.querySelector('#reset');
const calcBtn = document.querySelector('#calc');
const pdfBtn = document.querySelector('#pdf');

const defaultState = {}
MODEL.inputs.forEach(inp => {
  defaultState[inp.address] = (typeof inp.default === 'number') ? inp.default : (parseFloat(inp.default) || 0);
});

let state = JSON.parse(JSON.stringify(defaultState));

function renderInputs() {
  inputsDiv.innerHTML = '';
  MODEL.inputs.forEach(inp => {
    const id = inp.address;
    const wrap = document.createElement('div');
    wrap.className = 'input';
    const label = document.createElement('label');
    label.textContent = inp.label || id;
    const input = document.createElement('input');
    input.type = 'number';
    input.step = 'any';
    input.value = state[id] ?? '';
    input.oninput = (e) => {
      const v = parseFloat(e.target.value);
      state[id] = Number.isFinite(v) ? v : 0;
    };
    wrap.appendChild(label);
    wrap.appendChild(input);
    inputsDiv.appendChild(wrap);
  });
}

function compute() {
  const st = {...state};
  const evalF = makeEvaluator(st);
  MODEL.formulas.forEach(f => { st[f.address] = evalF(f.formula); });
  return st;
}

function formatNumber(x) {
  if (x == null || Number.isNaN(x)) return '';
  const n = Number(x);
  return Math.abs(n) >= 1000 ? n.toLocaleString(undefined, {maximumFractionDigits: 2}) : n.toFixed(2);
}

function renderResults(st) {
  resultsDiv.innerHTML = '';
  const keysToShow = ['C16','C17','C18','C19','C20','C22','C23','C25','C26','C27'];
  const labels = Object.fromEntries(MODEL.formulas.map(f => [f.address, f.label]));
  keysToShow.forEach(k => {
    const box = document.createElement('div');
    const label = document.createElement('div');
    label.className = 'muted';
    label.textContent = labels[k] || k;
    const val = document.createElement('div');
    const v = st[k];
    val.textContent = (typeof v === 'string') ? v : formatNumber(v);
    box.appendChild(label); box.appendChild(val);
    resultsDiv.appendChild(box);
  });

  const bom = [
    {qty: 'C30', desc: 'Cast Iron Deluge Valve with Wet Pilot Basic Trim Assembly'},
    {qty: 'C31', desc: 'Cast Iron Strainer'},
    {qty: 'C36', desc: 'Cast Iron Wafer Type Butterfly Valve'},
    {qty: 'C38', desc: 'Medium Velocity Water Spray Nozzle Nickel Chrome Plated Brass 1/2\" BSPT'},
    {qty: 'C40', desc: 'Deluge Valve Control Panel Outdoor with Canopy and IP65 Protection'},
    {qty: 'C42', desc: '24 VDC Solenoid Valve, Operating Pressure: 1 - 20 Bar, 1/2\" BSPT'},
  ];
  bomBody.innerHTML = '';
  bom.forEach(item => {
    const q = st[item.qty];
    if (q !== '' && !(typeof q === 'number' && (Number.isNaN(q) || q === 0))) {
      const tr = document.createElement('tr');
      const tdq = document.createElement('td');
      tdq.textContent = (typeof q === 'string') ? q : formatNumber(q);
      const tdd = document.createElement('td');
      tdd.textContent = item.desc;
      tr.appendChild(tdq); tr.appendChild(tdd);
      bomBody.appendChild(tr);
    }
  });
}

function run() { const st = compute(); renderResults(st); }

resetBtn.onclick = () => { state = JSON.parse(JSON.stringify(defaultState)); renderInputs(); run(); };
calcBtn.onclick = () => run();
pdfBtn.onclick = () => { window.print(); };

renderInputs();
run();
