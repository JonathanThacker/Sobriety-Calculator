
var myDate;
function setDate(datest)
                {
                myDate = datest.value;
                myDate = new Date(myDate);
                }
function FindTime(form)
                {
                var difference;
                  today = new Date();
                   diff = today.getTime() - myDate.getTime();
                      g = Math.floor(diff / 31536000000);
                      x = Math.floor(g * 12);
                      v = Math.floor(g * 365);
                      c = Math.floor(g * 52);
                      k = Math.floor(diff / 604800000);
                      r = Math.floor(k - c);
                      w = Math.floor(r * 7);
                      q = Math.floor(365 - w);
                      p = Math.floor(diff / 2628000000);
                      b = Math.floor(p * 30);
                      L = Math.floor(diff / 86400000);
                      s = Math.floor(p- x);
                      N = Math.floor(L - b);
                form.Fyears.value = g;
                form.Fmonths.value = p;
                form.Fmonthss.value = s;
                form.Fweeks.value = k;
                form.Fdays.value = L;
                form.Fdayss.value = N;
                form.Fdayz.value = v;
                form.Fmonthz.value = b;
                form.Fq.value = q;
                form.Fw.value = w;
                form.Fr.value = r;
                form.Fc.value = c;
                }
